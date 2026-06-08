import { Component, signal, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="pt-20">

      <!-- Hero -->
      <section class="page-hero">
        <div class="container-main">
          <span class="section-tag">Kontakt</span>
          <h1>Lassen Sie uns sprechen.</h1>
          <p>Erzählen Sie uns von Ihrem Projekt — wir melden uns innerhalb von 24 Stunden.</p>
        </div>
      </section>

      <!-- Contact Grid -->
      <section class="py-24 pb-32">
        <div class="container-main grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-24">

          <!-- Info -->
          <div>
            <h2 class="text-2xl font-bold font-display mb-8">Direkter Kontakt</h2>
            <div class="space-y-4">
              @for (info of infos; track info.title) {
                <div class="card-base p-5 flex gap-4 items-start">
                  <span class="text-2xl mt-0.5 shrink-0">{{ info.icon }}</span>
                  <div>
                    <strong class="block text-[0.7rem] text-white/50 uppercase tracking-[0.08em] mb-1 font-semibold">
                      {{ info.title }}
                    </strong>
                    <p class="text-white/75 text-sm leading-relaxed m-0" [innerHTML]="info.value"></p>
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- Form -->
          <div class="bg-card border border-subtle rounded-2xl p-12">

            @if (successMessage()) {
              <div class="text-center py-16">
                <div class="w-16 h-16 bg-[#28c840]/10 border border-[#28c840]/30 rounded-full
                            flex items-center justify-center text-[#28c840] text-2xl mx-auto mb-6">✓</div>
                <h3 class="text-2xl font-bold mb-3">Nachricht gesendet!</h3>
                <p class="text-white/50">{{ successMessage() }}</p>
              </div>
            } @else {
              <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label class="block text-[0.7rem] font-semibold text-white/60 uppercase tracking-[0.06em] mb-2"
                      for="name">Name *</label>
                    <input id="name" type="text" formControlName="name"
                      placeholder="Max Mustermann"
                      class="w-full bg-white/5 border rounded-[10px] px-4 py-3.5
                             text-white text-sm outline-none transition-colors duration-200
                             placeholder:text-white/25"
                      [class.border-subtle]="!isInvalid('name')"
                      [class.focus:border-accent]="!isInvalid('name')"
                      [class.border-[#ff5f57]]="isInvalid('name')" />
                    @if (isInvalid('name')) {
                      <span class="text-[#ff5f57] text-xs mt-1 block">Bitte geben Sie Ihren Namen ein.</span>
                    }
                  </div>
                  <div>
                    <label class="block text-[0.7rem] font-semibold text-white/60 uppercase tracking-[0.06em] mb-2"
                      for="email">E-Mail *</label>
                    <input id="email" type="email" formControlName="email"
                      placeholder="max@firma.de"
                      class="w-full bg-white/5 border rounded-[10px] px-4 py-3.5
                             text-white text-sm outline-none transition-colors duration-200
                             placeholder:text-white/25"
                      [class.border-subtle]="!isInvalid('email')"
                      [class.border-[#ff5f57]]="isInvalid('email')" />
                    @if (isInvalid('email')) {
                      <span class="text-[#ff5f57] text-xs mt-1 block">Bitte eine gültige E-Mail angeben.</span>
                    }
                  </div>
                </div>

                <div class="mb-6">
                  <label class="block text-[0.7rem] font-semibold text-white/60 uppercase tracking-[0.06em] mb-2"
                    for="company">Unternehmen</label>
                  <input id="company" type="text" formControlName="company"
                    placeholder="Muster GmbH (optional)"
                    class="w-full bg-white/5 border border-subtle rounded-[10px] px-4 py-3.5
                           text-white text-sm outline-none transition-colors duration-200
                           placeholder:text-white/25" />
                </div>

                <div class="mb-6">
                  <label class="block text-[0.7rem] font-semibold text-white/60 uppercase tracking-[0.06em] mb-2"
                    for="message">Nachricht *</label>
                  <textarea id="message" formControlName="message" rows="6"
                    placeholder="Beschreiben Sie Ihr Vorhaben, Ihre Anforderungen oder Fragen..."
                    class="w-full bg-white/5 border rounded-[10px] px-4 py-3.5
                           text-white text-sm outline-none transition-colors duration-200
                           placeholder:text-white/25 resize-y font-body"
                    [class.border-subtle]="!isInvalid('message')"
                    [class.border-[#ff5f57]]="isInvalid('message')"></textarea>
                  @if (isInvalid('message')) {
                    <span class="text-[#ff5f57] text-xs mt-1 block">Mindestens 10 Zeichen erforderlich.</span>
                  }
                </div>

                @if (errorMessage()) {
                  <div class="bg-[#ff5f57]/10 border border-[#ff5f57]/30 rounded-[10px]
                              px-4 py-3 text-[#ff5f57] text-sm mb-6">
                    {{ errorMessage() }}
                  </div>
                }

                <button type="submit"
                  class="w-full bg-accent text-black font-bold text-base py-4 rounded-xl border-none
                         cursor-pointer transition-all duration-200 mb-4
                         hover:bg-white hover:-translate-y-0.5
                         disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  [disabled]="isLoading()">
                  {{ isLoading() ? 'Wird gesendet...' : 'Nachricht senden →' }}
                </button>

                <p class="text-center text-white/30 text-xs m-0">
                  Mit dem Absenden stimmen Sie unserer
                  <a href="#" class="text-white/50 hover:text-white transition-colors">Datenschutzerklärung</a> zu.
                </p>
              </form>
            }
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`:host { display: block; }`]
})
export class ContactComponent {
  private fb  = inject(FormBuilder);
  private api = inject(ApiService);

  isLoading      = signal(false);
  successMessage = signal('');
  errorMessage   = signal('');

  form = this.fb.group({
    name:    ['', [Validators.required, Validators.minLength(2)]],
    email:   ['', [Validators.required, Validators.email]],
    company: [''],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  infos = [
    { icon: '📍', title: 'Adresse',        value: 'Nexora GmbH<br>Taunusanlage 12<br>60325 Frankfurt am Main' },
    { icon: '✉️', title: 'E-Mail',         value: '<a href="mailto:hallo@nexora.dev" class="text-accent no-underline">hallo@nexora.dev</a>' },
    { icon: '📞', title: 'Telefon',        value: '<a href="tel:+4969123456789" class="text-accent no-underline">+49 69 123 456 789</a>' },
    { icon: '🕐', title: 'Erreichbarkeit', value: 'Mo – Fr, 9:00 – 18:00 Uhr' },
  ];

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl?.invalid && ctrl?.touched);
  }

  onSubmit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.isLoading.set(true);
    this.errorMessage.set('');

    const { name, email, company, message } = this.form.value;
    this.api.submitContact({ name: name!, email: email!, company: company || undefined, message: message! })
      .subscribe({
        next: (res) => {
          this.isLoading.set(false);
          if (res.success) this.successMessage.set(res.data?.message ?? 'Vielen Dank für Ihre Nachricht!');
          else this.errorMessage.set(res.error ?? 'Ein Fehler ist aufgetreten.');
        },
        error: () => {
          this.isLoading.set(false);
          this.errorMessage.set('Verbindungsfehler. Bitte versuchen Sie es später erneut.');
        },
      });
  }
}
