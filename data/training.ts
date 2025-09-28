interface TrainingModel {
  images: string[];
  institute: string;
  title: string;
}

export const trainings: TrainingModel[] = [
  {
    images: ["/images/training/1.jpg"],
    institute: "SIC",
    title:
      "Training on Microsoft AZ-800 and AZ-801 - Administering Windows Server Hybrid Core Infrastructure",
  },
  {
    images: ["/images/training/2.jpg"],
    institute: "CNPS",
    title: "Training on Windows Server and Windows 11",
  },
  {
    images: ["/images/training/3.png"],
    institute: "Workshop ICES & MC3",
    title: "Cloud and Microsoft Copilot Workshop",
  },

  {
    images: ["/images/training/4.png"],
    institute: "ICES",
    title: "Cybersecurity Exhibition",
  },

  {
    images: ["/images/training/5.png"],
    institute: "RTC",
    title:
      "Administering Windows Server Hybrid Core Infrastructure (AZ-800 & AZ-801) Training",
  },

  {
    images: ["/images/training/6.png", "/images/training/7.png"],
    institute: "ENSET",
    title: "Training on Microsoft 365 Administration",
  },

  {
    images: ["/images/training/8.png"],
    institute: "CNDU",
    title: "Training on Microsoft Office Word and Excel",
  },

  {
    images: [
      "/images/training/9.png",
      "/images/training/10.png",
      "/images/training/11.png",
      "/images/training/12.png",
    ],
    institute: "SIC",
    title: "Windows Administration and Cybersecurity Training",
  },
];
