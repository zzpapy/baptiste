<?php

namespace App\Controller;

use App\Entity\Topic;
use App\Entity\Accueil;
use App\Entity\Actualites;
use App\Entity\Competences;
use App\Entity\Honnoraires;
use App\Entity\Presentation;
use App\Form\AccueilFormType;
use App\Service\FileUploader;
use App\Form\ActualitesFormType;
use App\Form\CompetenceFormType;
use App\Form\HonnorairesFormType;
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
     /**
     * @Route("/home", name="home")
     */
    public function index(Request $request, FileUploader $fileUploader,MailerInterface $mailer): Response
    {
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

        $honnoraires = $this->getDoctrine()
        ->getRepository(Honnoraires::class)
        ->findAll();
       
        if(empty($honnoraires)){
            $honnoraires = new Honnoraires();
        }
        else{
            $honnoraires = $honnoraires[0];
        }
        
        $formHon = $this->createForm(HonnorairesFormType::class, $honnoraires);
        $formHon->handleRequest($request);
        $actualites = $this->getDoctrine()
        ->getRepository(Actualites::class)
        ->findAll();

        if(empty($actualites)){
            $actualites = new Actualites();
        }
        else{
            $actualites = $actualites[0];
        }

        $formActu = $this->createForm(ActualitesFormType::class, $actualites);
        $formActu->handleRequest($request);
        
        $entityManager = $this->getDoctrine()->getManager();
        if ($form->isSubmitted() && $form->isValid() || $formPres->isSubmitted() && $formPres->isValid() || $formComp->isSubmitted() && $formComp->isValid() || $formHon->isSubmitted() && $formHon->isValid() || $formActu->isSubmitted() && $formActu->isValid()) {
            
            $entityManager->persist($accueil);
            
            if ($formPres->isSubmitted() && $formPres->isValid()) {
                $photo = $formPres->get('photo')->getData();
                if ($photo) {
                    $photoName = $fileUploader->upload($photo);
                    $presentation->setPhoto('/photos/'.$photoName);
                }    
                
                $entityManager->persist($presentation);
                
            }
            if ($formActu->isSubmitted() && $formActu->isValid()) {
                
                foreach ($formActu->get('topic') as $key => $value) {
                    $photo = $value->get('illustration')->getData();
                    
                    if ($photo) {
                        $photoName = $fileUploader->upload($photo);
                    } 
                }
                $entityManager->persist($actualites);
                $entityManager->flush();
            }
            if ($formComp->isSubmitted() && $formComp->isValid()) {
                $entityManager->persist($competences);
                
            }
            if ($formHon->isSubmitted() && $formHon->isValid()) {                
                $entityManager->persist($honnoraires);
                
            }
            $entityManager->flush();
            return $this->render('home/index.html.twig', [
                "accueil" => $accueil,
                "presentation" => $presentation,
                "competences" => $competences,
                "honnoraires" => $honnoraires,
                "actualites" => $actualites
            ]);
        }
            

        if($this->isGranted('ROLE_ADMIN')){
            return $this->render('admin/index.html.twig', [
                "acceuilForm" => $form->createView(),
                "presForm" => $formPres->createView(),
                "compForm" => $formComp->createView(),
                "formHon" => $formHon->createView(),
                "presentation" => $presentation,
                "formActu" => $formActu->createView(),
                "actualites" => $actualites
                ]);
        }
        else{
            return $this->render('home/index.html.twig', [
                "accueil" => $accueil, 
                "presentation" => $presentation,
                "competences" => $competences,
                "actualites" => $actualites,
                "honnoraires" => $honnoraires,
            ]);
            
        }
    }
}
