import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

const SERVICES = [
  { icon: '☁', title: 'Cloud Architecture', desc: 'Skalierbare Infrastrukturen auf AWS, GCP & Azure.' },
  { icon: '⌨', title: 'Softwareentwicklung', desc: 'Maßgeschneiderte Web- & Backend-Systeme.' },
  { icon: '⚙', title: 'DevOps & Automation', desc: 'CI/CD-Pipelines und vollautomatische Deployments.' },
  { icon: '🛡', title: 'Security Audits', desc: 'Penetrationstests & DSGVO-konforme Architekturen.' },
];

const STATS = [
  { value: '120+', label: 'Projekte abgeschlossen' },
  { value: '98%',  label: 'Kundenzufriedenheit' },
  { value: '12',   label: 'Jahre Erfahrung' },
  { value: '40+',  label: 'Experten im Team' },
];

const CLIENTS = ['Allianz', 'Bosch', 'Deutsche Bank', 'Lufthansa', 'SAP', 'Siemens'];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- ── Hero ── -->
    <section class="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-16
                    max-w-content mx-auto px-8 pt-32 pb-16">

      <!-- Background -->
      <div class="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div class="absolute inset-0"
          style="background-image: linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                                   linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
                 background-size: 60px 60px;"></div>
        <div class="absolute w-[600px] h-[600px] -top-48 -left-24 rounded-full opacity-10"
          style="background: #c8f55a; filter: blur(120px);"></div>
        <div class="absolute w-[400px] h-[400px] bottom-0 right-0 rounded-full opacity-10"
          style="background: #5c6fff; filter: blur(120px);"></div>
      </div>

      <!-- Content -->
      <div>
        <div class="inline-block bg-white/5 border border-white/10 text-white/70
                    px-4 py-1.5 rounded-full text-[0.7rem] font-medium tracking-[0.06em]
                    uppercase mb-8">
          Frankfurt · Remote · Worldwide
        </div>

        <h1 class="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 font-display">
          Software, die<br>
          <em class="not-italic bg-gradient-to-br from-accent to-[#a8ff78]
                     bg-clip-text text-transparent">wirklich skaliert.</em>
        </h1>

        <p class="text-lg text-white/55 leading-relaxed max-w-lg mb-10">
          Nexora entwickelt Cloud-native Software und IT-Infrastrukturen
          für Unternehmen, die in der digitalen Welt führen wollen.
        </p>

        <div class="flex gap-4 flex-wrap">
          <a routerLink="/kontakt" class="btn-primary">Projekt besprechen →</a>
          <a routerLink="/leistungen" class="btn-ghost">Leistungen ansehen</a>
        </div>
      </div>

      <!-- Code Card -->
      <div class="hidden lg:flex justify-center">
        <div class="bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden
                    font-mono text-sm w-full max-w-[440px] shadow-card">
          <div class="bg-white/[0.03] border-b border-white/[0.06] px-4 py-3 flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-[#28c840]"></span>
            <span class="ml-2 text-white/35 text-xs">nexora.config.ts</span>
          </div>
          <pre class="p-6 m-0 overflow-x-auto leading-loose text-xs"><code
><span class="text-[#ff79c6]">import</span> <span class="text-white/60">&#123;</span> defineConfig <span class="text-white/60">&#125;</span> <span class="text-[#ff79c6]">from</span> <span class="text-[#a8ff78]">'nexora'</span><span class="text-white/40">;</span>

<span class="text-[#ff79c6]">export default</span> defineConfig<span class="text-white/60">(&#123;</span>
  cloud<span class="text-white/40">:</span> <span class="text-white/60">&#123;</span>
    provider<span class="text-white/40">:</span> <span class="text-[#a8ff78]">'aws'</span><span class="text-white/40">,</span>
    region<span class="text-white/40">:</span>   <span class="text-[#a8ff78]">'eu-central-1'</span><span class="text-white/40">,</span>
    autoscale<span class="text-white/40">:</span> <span class="text-[#bd93f9]">true</span><span class="text-white/40">,</span>
  <span class="text-white/60">&#125;,</span>
  security<span class="text-white/40">:</span> <span class="text-white/60">&#123;</span>
    dsgvo<span class="text-white/40">:</span>  <span class="text-[#bd93f9]">true</span><span class="text-white/40">,</span>
    audit<span class="text-white/40">:</span>  <span class="text-[#a8ff78]">'continuous'</span><span class="text-white/40">,</span>
  <span class="text-white/60">&#125;,</span>
<span class="text-white/60">&#125;)</span><span class="text-white/40">;</span></code></pre>
          <div class="px-4 py-2.5 bg-[#28c840]/[0.08] border-t border-white/[0.06]
                      text-[#28c840] text-[0.7rem] flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#28c840] animate-pulse2"></span>
            3 services · running
          </div>
        </div>
      </div>
    </section>

    <!-- ── Stats ── -->
    <section class="border-t border-b border-subtle py-16">
      <div class="container-main grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        @for (stat of stats; track stat.value) {
          <div>
            <span class="block text-4xl font-extrabold font-display tracking-tight
                         bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent mb-1">
              {{ stat.value }}
            </span>
            <span class="text-white/40 text-sm">{{ stat.label }}</span>
          </div>
        }
      </div>
    </section>

    <!-- ── Services ── -->
    <section class="py-32">
      <div class="container-main">
        <div class="section-header">
          <span class="section-tag">Leistungen</span>
          <h2>Technologie, die bewegt.</h2>
          <p>Wir decken den gesamten Software-Lifecycle ab – von der Architektur bis zum Betrieb.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (service of services; track service.title) {
            <div class="card-hover p-8">
              <div class="text-4xl mb-4">{{ service.icon }}</div>
              <h3 class="text-base font-semibold mb-3">{{ service.title }}</h3>
              <p class="text-white/45 text-sm leading-relaxed mb-5">{{ service.desc }}</p>
              <a routerLink="/leistungen"
                class="text-accent no-underline text-xs font-medium transition-opacity hover:opacity-70">
                Mehr erfahren →
              </a>
            </div>
          }
        </div>

        <div class="text-center mt-12">
          <a routerLink="/leistungen" class="btn-outline">Alle Leistungen ansehen →</a>
        </div>
      </div>
    </section>

    <!-- ── Clients ── -->
    <section class="py-16">
      <div class="container-main">
        <p class="text-center text-white/30 text-[0.7rem] tracking-[0.1em] uppercase mb-8">
          Vertrauen von führenden Unternehmen
        </p>
        <div class="flex flex-wrap justify-center gap-x-16 gap-y-4">
          @for (client of clients; track client) {
            <span class="text-white/20 text-xl font-bold font-display tracking-tight
                         cursor-default transition-colors duration-200 hover:text-white/50">
              {{ client }}
            </span>
          }
        </div>
      </div>
    </section>

    <!-- ── CTA ── -->
    <section class="pb-32">
      <div class="container-main">
        <div class="relative overflow-hidden bg-card border border-white/10 rounded-3xl p-20 text-center">
          <div class="absolute w-[500px] h-[500px] bg-accent rounded-full
                      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      blur-[150px] opacity-[0.08] pointer-events-none"></div>
          <h2 class="text-4xl font-extrabold font-display tracking-tight mb-4 relative">
            Bereit für Ihr nächstes Projekt?
          </h2>
          <p class="text-white/50 max-w-md mx-auto mb-10 leading-relaxed relative">
            Lassen Sie uns gemeinsam herausfinden, wie Nexora Ihr Unternehmen digital voranbringen kann.
          </p>
          <a routerLink="/kontakt" class="btn-primary-lg relative">
            Kostenloses Erstgespräch →
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`:host { display: block; }`],
})
export class HomeComponent {
  services = SERVICES;
  stats    = STATS;
  clients  = CLIENTS;
}
