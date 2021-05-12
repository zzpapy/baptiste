<?php

namespace App\Form;

use App\Entity\Actualites;
use App\Form\TopicFormType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;

class ActualitesFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('topic',CollectionType::class,[
                'entry_type' => TopicFormType::class,
                'block_name'=>'topic_list',                
                "allow_add"=>true,
                "label" => false,
                "allow_delete"=>true,
                "by_reference"=>false,
                'entry_options'=>[
                    'label'=>false,
                    'attr' => ['class' => 'topic'],
                ],
                
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Actualites::class,
        ]);
    }
}
