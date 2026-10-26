import DownloadContentPage from "./contentpage";

export const metadata = {
  title: "Download Lovely Craft APK Latest Version - Android & PC",
  description: "Download the latest version of Lovely Craft APK safely. Follow our easy guide to install and play the game on Android devices or PC.",
  alternates: {
    canonical: "https://lovelycraftapk.org/download",
  },
   openGraph: {
    title: "Download Lovely Craft APK Latest Version - Android & PC",
    description:
      "Download the latest version of Lovely Craft APK safely. Follow our easy guide to install and play the game on Android devices or PC.",
    url: "https://lovelycraftapk.org/download",
    siteName: "Lovely Craft APK",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Lovely Craft APK Gameplay Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <DownloadContentPage />;
}