import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [class.py-6]="!isScrolled()"
      [class.py-4]="isScrolled()"
      [class.bg-bg/90]="isScrolled()"
      [class.backdrop-blur-xl]="isScrolled()"
      [class.border-b]="isScrolled()"
      [class.border-subtle]="isScrolled()"
    >
      <div class="container-main flex items-center gap-12">

        <!-- Logo -->
        <a routerLink="/" class="flex items-center gap-2 no-underline shrink-0">
          <span class="w-8 h-8 bg-accent text-black font-extrabold text-sm flex items-center justify-center rounded-md">N</span>
          <span class="text-xl font-bold text-white font-display tracking-tight">nexora</span>
        </a>

        <!-- Desktop Links -->
        <ul class="hidden md:flex items-center gap-8 list-none m-0 p-0 flex-1">
          <li><a routerLink="/" routerLinkActive="!text-white" [routerLinkActiveOptions]="{exact:true}"
              class="text-white/65 no-underline text-sm font-medium tracking-wide transition-colors duration-200 hover:text-white">Start</a></li>
          <li><a routerLink="/leistungen" routerLinkActive="!text-white"
              class="text-white/65 no-underline text-sm font-medium tracking-wide transition-colors duration-200 hover:text-white">Leistungen</a></li>
          <li><a routerLink="/ueber-uns" routerLinkActive="!text-white"
              class="text-white/65 no-underline text-sm font-medium tracking-wide transition-colors duration-200 hover:text-white">Über uns</a></li>
          <li><a routerLink="/kontakt" routerLinkActive="!text-white"
              class="text-white/65 no-underline text-sm font-medium tracking-wide transition-colors duration-200 hover:text-white">Kontakt</a></li>
        </ul>

        <a routerLink="/kontakt" class="hidden md:inline-block ml-auto btn-primary">
          Projekt starten →
        </a>

        <!-- Burger -->
        <button
          class="md:hidden ml-auto flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1"
          (click)="menuOpen.set(!menuOpen())"
          [attr.aria-expanded]="menuOpen()"
        >
          <span class="block w-6 h-0.5 bg-white transition-all duration-300"
            [class.rotate-45]="menuOpen()" [class.translate-y-2]="menuOpen()"></span>
          <span class="block w-6 h-0.5 bg-white transition-all duration-300"
            [class.opacity-0]="menuOpen()"></span>
          <span class="block w-6 h-0.5 bg-white transition-all duration-300"
            [class.-rotate-45]="menuOpen()" [class.-translate-y-2]="menuOpen()"></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        class="md:hidden overflow-hidden transition-all duration-300 bg-bg/98"
        [class.max-h-0]="!menuOpen()"
        [class.max-h-96]="menuOpen()"
      >
        <ul class="list-none p-6 m-0 space-y-1 border-t border-subtle">
          <li><a routerLink="/" (click)="menuOpen.set(false)"
            class="block py-3 text-white no-underline text-base border-b border-subtle/50">Start</a></li>
          <li><a routerLink="/leistungen" (click)="menuOpen.set(false)"
            class="block py-3 text-white no-underline text-base border-b border-subtle/50">Leistungen</a></li>
          <li><a routerLink="/ueber-uns" (click)="menuOpen.set(false)"
            class="block py-3 text-white no-underline text-base border-b border-subtle/50">Über uns</a></li>
          <li><a routerLink="/kontakt" (click)="menuOpen.set(false)"
            class="block py-3 text-white no-underline text-base">Kontakt</a></li>
        </ul>
        <div class="px-6 pb-6">
          <a routerLink="/kontakt" class="btn-primary w-full text-center block"
            (click)="menuOpen.set(false)">Projekt starten →</a>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class NavbarComponent {
  isScrolled = signal(false);
  menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() { this.isScrolled.set(window.scrollY > 20); }
}
