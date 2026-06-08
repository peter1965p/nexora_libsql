import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

const TEAM = [
  { initials: 'MK', name: 'Maximilian Kraft',  role: 'CEO & Co-Founder',   bio: 'Ex-AWS Solutions Architect. 15 Jahre Erfahrung in Cloud und Enterprise Software.' },
  { initials: 'LA', name: 'Lena Albrecht',     role: 'CTO & Co-Founder',   bio: 'Full-Stack-Expertin und Open-Source-Kontributerin. Kern-Architektin unserer Plattformstrategie.' },
  { initials: 'DM', name: 'David Müller',      role: 'Head of DevOps',     bio: 'Kubernetes & Terraform Spezialist. Hat Infrastrukturen für DAX-Konzerne aufgebaut.' },
  { initials: 'SA', name: 'Sophie Andres',     role: 'Lead Designer',      bio: 'UX/UI-Expertin mit Fokus auf Design Systems und barrierefreien Interfaces.' },
  { initials: 'TP', name: 'Thomas Park',       role: 'Security Engineer',  bio: 'Zertifizierter Penetrationstester und DSGVO-Berater mit Fokus auf kritische Infrastrukturen.' },
  { initials: 'JR', name: 'Julia Rost',        role: 'Data Engineer',      bio: 'Spezialistin für Datenpipelines, Analytics und KI-Integration in Unternehmensumgebungen.' },
];

const VALUES = [
  { icon: '🎯', title: 'Qualität zuerst',  desc: 'Wir liefern keine halbfertigen Lösungen. Jede Zeile Code steht für unseren Anspruch.' },
  { icon: '🤝', title: 'Partnerschaft',    desc: 'Wir denken wie Ihr internes Team – langfristig, mit echtem Verständnis für Ihr Business.' },
  { icon: '🚀', title: 'Innovation',       desc: 'Wir setzen bewusst auf moderne Technologien, die heute tragfähig und morgen Standard sind.' },
  { icon: '🔒', title: 'Verlässlichkeit',  desc: 'Deadlines und Budgets sind für uns verbindlich. Keine Überraschungen, volle Transparenz.' },
];

const STORY_STATS = [
  { value: '2012', label: 'gegründet in Frankfurt' },
  { value: '40+',  label: 'Experten im Team' },
  { value: '12',   label: 'Länder, in denen wir tätig sind' },
];

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="pt-20">

      <!-- Hero -->
      <section class="page-hero">
        <div class="container-main">
          <span class="section-tag">Über uns</span>
          <h1>Wir bauen Software,<br>die Bestand hat.</h1>
          <p>Gegründet 2012 in Frankfurt. Seitdem begleiten wir Unternehmen auf ihrem Weg in die digitale Zukunft.</p>
        </div>
      </section>

      <!-- Story -->
      <section class="py-32 border-b border-subtle">
        <div class="container-main grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 class="text-3xl font-extrabold font-display tracking-tight mb-6">Unsere Geschichte</h2>
            <div class="space-y-4 text-white/50 leading-relaxed">
              <p>Nexora entstand aus der Überzeugung, dass gute Software nicht nur funktionieren muss – sie muss skalieren, sicher sein und begeistern.</p>
              <p>Was mit zwei Freelancern in einem Frankfurter Co-Working-Space begann, ist heute ein Team von über 40 Spezialisten, das Kunden von Frankfurt bis Tokyo betreut.</p>
              <p>Wir glauben an langfristige Partnerschaften statt kurzfristiger Projekte. Deshalb sind viele unserer Kunden seit Jahren an unserer Seite.</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            @for (stat of storyStats; track stat.value) {
              <div class="card-base px-8 py-6">
                <span class="block text-4xl font-extrabold font-display tracking-tight text-accent">
                  {{ stat.value }}
                </span>
                <span class="text-white/50 text-sm mt-1 block">{{ stat.label }}</span>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Values -->
      <section class="py-32 border-b border-subtle">
        <div class="container-main">
          <div class="section-header">
            <span class="section-tag">Werte</span>
            <h2>Was uns antreibt.</h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            @for (v of values; track v.title) {
              <div class="card-hover p-8">
                <div class="text-4xl mb-4">{{ v.icon }}</div>
                <h3 class="font-semibold mb-3">{{ v.title }}</h3>
                <p class="text-white/45 text-sm leading-relaxed">{{ v.desc }}</p>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Team -->
      <section class="py-32 border-b border-subtle">
        <div class="container-main">
          <div class="section-header">
            <span class="section-tag">Team</span>
            <h2>Die Köpfe dahinter.</h2>
            <p>Erfahrene Experten mit echter Leidenschaft für Technologie.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (member of team; track member.name) {
              <div class="card-base p-8 transition-all duration-300 hover:border-mid">
                <div class="w-14 h-14 bg-accent text-black rounded-xl font-extrabold
                            flex items-center justify-center text-base mb-5">
                  {{ member.initials }}
                </div>
                <h3 class="text-lg font-bold mb-1">{{ member.name }}</h3>
                <span class="block text-accent text-xs font-medium mb-4">{{ member.role }}</span>
                <p class="text-white/45 text-sm leading-relaxed">{{ member.bio }}</p>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Join -->
      <section class="py-16 pb-32">
        <div class="container-main">
          <div class="bg-card border border-white/10 rounded-3xl p-20 text-center">
            <h2 class="text-3xl font-extrabold font-display tracking-tight mb-4">Werden Sie Teil des Teams.</h2>
            <p class="text-white/50 mb-8">Wir suchen ständig nach talentierten Menschen, die unsere Werte teilen.</p>
            <a href="#" class="btn-primary">Offene Stellen ansehen →</a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class AboutComponent {
  team = TEAM;
  values = VALUES;
  storyStats = STORY_STATS;
}
