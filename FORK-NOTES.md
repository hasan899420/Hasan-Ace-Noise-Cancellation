# FORK-NOTES — Hasan Ace Noise Cancellation

- **Base:** sayampy/deepdenoiser, public repo, checked 2026-10-29, commit f99b601c8210e850fe87ef7cb813b7af30269aca, version 1.4.4, 182 commits at check time.
- **Original author:** sayampy / Sayam Goswami. Credit is kept in README.md, the About screen, and the Donation screen.
- **Fork branding:** Hasan / Hasan® / Hasan Ace Noise Cancellation. This branding does NOT make Hasan the original author.
- **License:** GNU General Public License v3.0 (GPL-3.0). LICENSE file is byte-identical to the original and was not edited. Any distribution of this fork must also stay GPL-3.0 and offer the source.
- **Install identity (decoupling):**
  - package: com.mdhasan.acenoisecancellation
  - dev package: com.mdhasan.acenoisecancellation.dev
  - scheme: hasanacenoise
  - update API: https://api.github.com/repos/hasan899420/Hasan-Ace-Noise-Cancellation/releases/latest
  - EAS project ID: removed; eas.json appVersionSource: local
  - No original package, Play Store URL, EAS project, or update URL remains in the app code (only intentional credit links to github.com/sayampy/deepdenoiser remain, in README / About / Donation credit).
- **Removed:** .github/FUNDING.yml, original donation payment links (Ko-fi, GitHub Sponsors, UPI), committed Android build/ artifacts under modules/AudioProcessorModule/android/build.
- **Not changed:** app icon / splash images are still the original images. If a new H icon is wanted, that is a separate next step.
- **Not tested yet:** the APK build itself (GitHub Actions run), and install/run on a phone. Those are the next steps, not claimed as done here.

- **APK / app name (2026-10-29, user instruction):** HNC. Launcher name and final APK file name are HNC / HNC.apk. The full name "Hasan Ace Noise Cancellation" is kept in the Home subtitle and About description. Package, scheme, slug and update URL were deliberately NOT changed again for this rename, because they were already decoupled.
