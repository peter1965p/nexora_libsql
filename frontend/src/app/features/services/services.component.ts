import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

const SERVICES = [
  { icon: '☁', slug: 'cloud', title: 'Cloud Architecture',
    description: 'Skalierbare Cloud-Infrastrukturen auf AWS, GCP und Azure – von der Konzeption bis zum Betrieb.',
    features: ['Multi-Cloud-Strategie', 'Kubernetes & Container', 'Serverless Architekturen', 'Cost Optimization'] },
  { icon: '⌨', slug: 'dev', title: 'Softwareentwicklung',
    description: 'Maßgeschneiderte Web- und Backend-Systeme mit modernstem TypeScript-Stack.',
    features: ['Angular / React / Vue', 'Node.js & Hono APIs', 'Microservices', 'Performance Optimization'] },
  { icon: '⚙', slug: 'devops', title: 'DevOps & Automation',
    description: 'CI/CD-Pipelines, IaC mit Terraform und vollautomatische Deployments.',
    features: ['GitHub Actions', 'Terraform & Pulumi', 'Docker & K8s', 'Monitoring & Alerting'] },
  { icon: '💼', slug: 'consulting', title: 'IT-Beratung',
    description: 'Strategische Technologieberatung für digitale Transformation und Modernisierung.',
    features: ['Tech-Stack Evaluation', 'Architektur Reviews', 'Team Coaching', 'Roadmap Planning'] },
  { icon: '🛡', slug: 'security', title: 'Security Audits',
    description: 'Penetrationstests, Code-Reviews und DSGVO-konforme Sicherheitsarchitekturen.',
    features: ['Penetrationstests', 'DSGVO-Compliance', 'Code Security Review', 'Zero-Trust Architecture'] },
  { icon: '📊', slug: 'data', title: 'Data Engineering',
    description: 'Datenpipelines, Analytics-Plattformen und KI-Integration für datengetriebene Entscheidungen.',
    features: ['ETL / ELT Pipelines', 'Data Warehousing', 'AI/ML Integration', 'Real-time Analytics'] },
];

const STEPS = [
  { num: '1', title: 'Discovery',   desc: 'Wir verstehen Ihre Ziele, Prozesse und technischen Anforderungen im Detail.' },
  { num: '2', title: 'Konzeption',  desc: 'Architektur, Tech-Stack und Projektstrategie werden gemeinsam erarbeitet.' },
  { num: '3', title: 'Umsetzung',   desc: 'Agile Entwicklung mit wöchentlichen Updates und engem Austausch.' },
  { num: '4', title: 'Launch & Betrieb', desc: 'Deployment, Monitoring und langfristiger Support aus einer Hand.' },
];

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="pt-20">

      <!-- Hero -->
      <section class="page-hero">
        <div class="container-main">
          <span class="section-tag">Leistungen</span>
          <h1>Was wir für Sie tun.</h1>
          <p>Vom ersten Konzept bis zur produktiven Lösung — wir begleiten Ihr Vorhaben vollständig.</p>
        </div>
      </section>

      <!-- Service Items -->
      <section class="py-24">
        <div class="container-main">
          @for (service of services; track service.slug; let i = $index) {
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center
                        py-20 border-b border-subtle"
              [class.lg:flex-row-reverse]="i % 2 === 1">

              <div [class.lg:order-2]="i % 2 === 1">
                <div class="text-accent text-[0.7rem] font-bold tracking-[0.1em] uppercase mb-1">
                  0{{ i + 1 }}
                </div>
                <div class="text-5xl mb-4">{{ service.icon }}</div>
                <h2 class="text-3xl font-extrabold font-display tracking-tight mb-4">
                  {{ service.title }}
                </h2>
                <p class="text-white/50 leading-relaxed mb-6">{{ service.description }}</p>

                <ul class="list-none p-0 m-0 mb-8 space-y-2">
                  @for (f of service.features; track f) {
                    <li class="text-white/65 text-sm flex items-center gap-3">
                      <span class="text-accent font-bold">✓</span> {{ f }}
                    </li>
                  }
                </ul>

                <a routerLink="/kontakt" class="btn-primary">Anfrage stellen →</a>
              </div>

              <div class="hidden lg:flex justify-center" [class.lg:order-1]="i % 2 === 1">
                <div class="w-64 h-64 bg-card border border-subtle rounded-3xl
                            flex items-center justify-center">
                  <span class="text-8xl">{{ service.icon }}</span>
                </div>
              </div>
            </div>
          }
        </div>
      </section>

      <!-- Process -->
      <section class="py-24 pb-32">
        <div class="container-main">
          <div class="section-header">
            <span class="section-tag">Prozess</span>
            <h2>Wie wir arbeiten.</h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            @for (step of steps; track step.num) {
              <div class="card-base p-8">
                <div class="w-10 h-10 bg-accent text-black font-extrabold rounded-[10px]
                            flex items-center justify-center text-base mb-5">
                  {{ step.num }}
                </div>
                <h3 class="font-semibold mb-3">{{ step.title }}</h3>
                <p class="text-white/45 text-sm leading-relaxed">{{ step.desc }}</p>
              </div>
            }
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class ServicesComponent {
  services = SERVICES;
  steps = STEPS;
}
