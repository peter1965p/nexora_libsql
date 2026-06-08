import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-[#060609] border-t border-subtle pt-20 pb-8 mt-32">
      <div class="container-main">

        <div class="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">

          <!-- Brand -->
          <div>
            <a routerLink="/" class="flex items-center gap-2 no-underline mb-6">
              <span class="w-7 h-7 bg-accent text-black font-extrabold text-xs flex items-center justify-center rounded-[5px]">N</span>
              <span class="text-lg font-bold text-white font-display">nexora</span>
            </a>
            <p class="text-white/45 text-sm leading-relaxed mb-6">
              Software & IT-Lösungen<br>die Ihr Unternehmen voranbringen.
            </p>
            <div class="flex gap-3">
              @for (s of socials; track s.label) {
                <a [href]="s.href" [attr.aria-label]="s.label"
                  class="w-9 h-9 border border-white/12 rounded-lg flex items-center justify-center
                         text-white/50 no-underline text-xs font-bold
                         transition-all duration-200 hover:border-accent hover:text-accent">
                  {{ s.icon }}
                </a>
              }
            </div>
          </div>

          <!-- Links -->
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-8">
            @for (group of linkGroups; track group.title) {
              <div>
                <h4 class="text-white text-[0.7rem] font-semibold uppercase tracking-[0.1em] mb-5">
                  {{ group.title }}
                </h4>
                <ul class="list-none p-0 m-0 space-y-3">
                  @for (link of group.links; track link.label) {
                    <li>
                      <a [routerLink]="link.route ?? null" [href]="link.href ?? null"
                        class="text-white/45 no-underline text-sm transition-colors duration-200 hover:text-white">
                        {{ link.label }}
                      </a>
                    </li>
                  }
                </ul>
              </div>
            }
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-subtle mt-16 pt-8 flex flex-wrap justify-between items-center gap-4">
          <p class="text-white/30 text-xs m-0">© 2024 Nexora GmbH · Frankfurt am Main</p>
          <p class="text-white/30 text-xs m-0">Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`:host { display: block; }`]
})
export class FooterComponent {
  socials = [
    { label: 'LinkedIn', icon: 'in', href: '#' },
    { label: 'GitHub',   icon: 'gh', href: '#' },
    { label: 'X',        icon: '𝕏',  href: '#' },
  ];

  linkGroups = [
    {
      title: 'Leistungen',
      links: [
        { label: 'Cloud Architecture', route: '/leistungen' },
        { label: 'Softwareentwicklung', route: '/leistungen' },
        { label: 'DevOps & Automation', route: '/leistungen' },
        { label: 'IT-Beratung', route: '/leistungen' },
      ],
    },
    {
      title: 'Unternehmen',
      links: [
        { label: 'Über uns', route: '/ueber-uns' },
        { label: 'Team', route: '/ueber-uns' },
        { label: 'Kontakt', route: '/kontakt' },
        { label: 'Karriere', href: '#' },
      ],
    },
    {
      title: 'Rechtliches',
      links: [
        { label: 'Impressum', href: '#' },
        { label: 'Datenschutz', href: '#' },
        { label: 'AGB', href: '#' },
      ],
    },
  ];
}
