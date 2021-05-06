<?php

namespace App\Controller;

use App\Entity\Accueil;
use App\Entity\Competences;
use App\Entity\Presentation;
use App\Form\AccueilFormType;
use App\Service\FileUploader;
use App\Form\CompetenceFormType;
use Symfony\Component\Mime\Email;
use App\Form\PresentationFormType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Component\Config\Definition\Exception\Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;

class HomeController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(Request $request, FileUploader $fileUploader,MailerInterface $mailer): Response
    {
        $post = $request->request;
        // dd($post);
        $nom = $post->get('nom');
        $from = $post->get('mail');
        // $email = (new \Swift_Message('Nouveau contact'))
        //         // On attribue l'expéditeur
        //         ->setFrom($from)
        //         // On attribue le destinataire
        //         ->setTo('gregory.pace@hotmail.fr')
        //         // On crée le texte avec la vue
        //         ->setBody(
        //             "totototototototot"
        //         );
        $email = (new Email())
        ->from($from)
        ->to('contact@dev-greg-pace.fr')
        //->cc('cc@example.com')
        //->bcc('bcc@example.com')
        //->replyTo('fabien@example.com')
        //->priority(Email::PRIORITY_HIGH)
        ->subject('Time for Symfony Mailer!')
        ->text('Sending emails is fun again!')
        ->html('<p>See Twig integration for better HTML integration!</p>');
        try{
            $test = $mailer->send($email);

        }
        catch(Exception $e){
            dd($e);
        }
        // dd($post);
        $accueil = $this->getDoctrine()
        ->getRepository(Accueil::class)
        ->findAll();


        if(empty($accueil)){
            $accueil = new Accueil();
        }
        else{
            $accueil = $accueil[0];
        }
        
        $form = $this->createForm(AccueilFormType::class, $accueil);
        $form->handleRequest($request);
        $presentation = $this->getDoctrine()
        ->getRepository(Presentation::class)
        ->findAll();
        
        if(empty($presentation)){
            $presentation = new Presentation();
        }
        else{
            $presentation = $presentation[0];
        }
        
        $formPres = $this->createForm(PresentationFormType::class, $presentation);
        $formPres->handleRequest($request);
        
        $competences = $this->getDoctrine()
        ->getRepository(Competences::class)
        ->findAll();
        
        if(empty($competences)){
            $competences = new Competences();
        }
        else{
            $competences = $competences[0];
        }
        
        $formComp = $this->createForm(CompetenceFormType::class, $competences);
        $formComp->handleRequest($request);
        
        // dd($form->isSubmitted() && $form->isValid() || $formPres->isSubmitted() && $formPres->isValid() || $formComp->isSubmitted() && $formComp->isValid());
        if ($form->isSubmitted() && $form->isValid() || $formPres->isSubmitted() && $formPres->isValid() || $formComp->isSubmitted() && $formComp->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($accueil);
            $entityManager->flush();
            if ($formPres->isSubmitted() && $formPres->isValid()) {
                $photo = $formPres->get('photo')->getData();
                $photo = $formPres->get('photo')->getData();
                if ($photo) {
                    $photoName = $fileUploader->upload($photo);
                    $presentation->setPhoto('/photos/'.$photoName);
                }    
                
                $entityManager->persist($presentation);
                $entityManager->flush();
            }
            if ($formComp->isSubmitted() && $formComp->isValid()) {
                $entityManager->persist($competences);
                $entityManager->flush();
            }

            // dd($presentation);
            return $this->render('home/index.html.twig', [
                "accueil" => $accueil,
                "presentation" => $presentation,
                "competences" => $competences
            ]);
        }
            

        if($this->isGranted('ROLE_ADMIN')){
            return $this->render('admin/index.html.twig', [
                "acceuilForm" => $form->createView(),
                "presForm" => $formPres->createView(),
                "compForm" => $formComp->createView()
                ]);
        }
        else{
            return $this->render('home/index.html.twig', [
                "accueil" => $accueil, "presentation" => $presentation,
                "competences" => $competences,
                "presentation" => $presentation
            ]);
            
        }
    }
}
