# HNC

Hasan Ace Noise Cancellation

Offline AI audio denoiser for audio and video. Private, on-device, and fast.

> **Fork note — please read:** This is a fork of **DeepDenoiser** by **sayampy (Sayam Goswami)** — https://github.com/sayampy/deepdenoiser
> Hasan is the fork branding only. Hasan is **not** the original author of DeepDenoiser.
> The original **GPL-3.0 LICENSE file is unchanged** — see [LICENSE](LICENSE). This fork stays GPL-3.0.

**Hasan Ace Noise Cancellation** removes background noise from audio and video files on your Android device. It runs entirely on-device using **DeepFilterNet3** — your files never leave your phone.

## ✨ Features

- **🔇 Noise suppression**: Removes background hiss, hums, and environmental noise using deep learning.
- **🎥 Audio & video**: Process both voice recordings and video clips.
- **🎤 Live recording**: Capture audio with built-in noise removal.
- **🔒 Privacy-first**: All processing happens on your device. Nothing is uploaded.
- **🚀 Native performance**: Custom Kotlin modules for efficient media transcoding and I/O.

## 🛠️ Tech Stack

- **Framework**: React Native (Expo)
- **AI Model**: DeepFilterNet3 (via `onnxruntime-react-native`)
- **Native Logic**: Custom Kotlin modules for Android `MediaCodec` handling
- **State Management**: React Hooks & Expo Router

## What was changed from the original (decoupling)

- App name: DeepDenoiser → Hasan Ace Noise Cancellation
- Android package: `com.sayampy.deepdenoiser` → `com.mdhasan.acenoisecancellation` (dev: `... .dev`)
- Deep link scheme: `deepdenoiser` → `hasanacenoise`
- In-app update check: original `sayampy/deepdenoiser` releases → this fork's own releases only. The original app's update can therefore **not** update this app.
- Original EAS project ID removed, `eas.json` set to local version source — no link to the original EAS project.
- Original Play Store link, Ko-fi / GitHub Sponsors / UPI donation links and FUNDING file removed. The Donation screen now only credits the original project; no donation payment is collected in this fork.
- Home screen: a `Hasan®` badge in the top-right corner. About screen: “Fork by Hasan® • Original by Sayampy”.

## 🚀 Get Started

### Prerequisites

- Bun (Recommended)
- Android Development Environment (Android Studio)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/hasan899420/Hasan-Ace-Noise-Cancellation.git
   cd Hasan-Ace-Noise-Cancellation
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Run on Android** *(Note: This project uses custom native code, so you must use a Development Build, not Expo Go)*

   ```bash
   bunx expo run:android
   ```

### Build an APK (GitHub Actions)

The workflow in `.github/workflows/android.yml` builds Android on GitHub Actions.
Run it manually (workflow_dispatch) with build type `release-apk` for a standalone release APK.

## 📄 License

GPL-3.0 — see [LICENSE](LICENSE). The license was not removed or replaced.
