<?php

namespace App\Entity;

use App\Repository\CompetencesRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CompetencesRepository::class)
 */
class Competences
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text")
     */
    private $textComp;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTextComp(): ?string
    {
        return $this->textComp;
    }

    public function setTextComp(string $textComp): self
    {
        $this->textComp = $textComp;

        return $this;
    }
}
