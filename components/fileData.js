const fileData = {
  name: "root",
  type: "folder",
  children: [
    {
      name: "Documents",
      type: "folder",
      children: [
        { name: "Resume.pdf", type: "file", size: "120 KB" },
        { name: "CoverLetter.docx", type: "file", size: "80 KB" },
        { name: "ProjectProposal.docx", type: "file", size: "90 KB" },
        {
          name: "Reports",
          type: "folder",
          children: [
            { name: "AnnualReport.pdf", type: "file", size: "200 KB" },
            { name: "QuarterlyReport.docx", type: "file", size: "150 KB" },
            {
              name: "Data",
              type: "folder",
              children: [
                { name: "Financials.xlsx", type: "file", size: "1 MB" },
                { name: "Budget.csv", type: "file", size: "500 KB" },
                {
                  name: "Archive",
                  type: "folder",
                  children: [
                    { name: "Q1Data.zip", type: "file", size: "2 MB" },
                    { name: "Q2Data.zip", type: "file", size: "2.5 MB" },
                    {
                      name: "Archive",
                      type: "folder",
                      children: [
                        { name: "Q1Data.zip", type: "file", size: "2 MB" },
                        { name: "Q2Data.zip", type: "file", size: "2.5 MB" },
                        {
                          name: "Archive",
                          type: "folder",
                          children: [
                            { name: "Q1Data.zip", type: "file", size: "2 MB" },
                            { name: "Q2Data.zip", type: "file", size: "2.5 MB" },
                            {
                              name: "Archive",
                              type: "folder",
                              children: [
                                { name: "Q1Data.zip", type: "file", size: "2 MB" },
                                { name: "Q2Data.zip", type: "file", size: "2.5 MB" },{
                                  name: "Archive",
                                  type: "folder",
                                  children: [
                                    { name: "Q1Data.zip", type: "file", size: "2 MB" },
                                    { name: "Q2Data.zip", type: "file", size: "2.5 MB" }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Photos",
      type: "folder",
      children: [
        {
          name: "Vacation",
          type: "folder",
          children: [
            { name: "beach.png", type: "file", size: "2.5 MB" },
            { name: "mountains.jpg", type: "file", size: "1.7 MB" },
            {
              name: "Summer2023",
              type: "folder",
              children: [
                { name: "lake.png", type: "file", size: "3 MB" },
                { name: "hiking.jpg", type: "file", size: "2.2 MB" },
                {
                  name: "DeepNested",
                  type: "folder",
                  children: [
                    { name: "photo1.jpg", type: "file", size: "1.2 MB" },
                    { name: "photo2.jpg", type: "file", size: "1.5 MB" },
                    {
                      name: "DeeperLevel",
                      type: "folder",
                      children: [
                        {
                          name: "EndlessPhotos",
                          type: "folder",
                          children: [
                            { name: "pic1.jpg", type: "file", size: "500 KB" },
                            { name: "pic2.jpg", type: "file", size: "700 KB" }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: "Events",
          type: "folder",
          children: [
            { name: "wedding.jpg", type: "file", size: "4 MB" },
            { name: "birthday.png", type: "file", size: "3.5 MB" }
          ]
        }
      ]
    },
    {
      name: "Music",
      type: "folder",
      children: [
        { name: "song.mp3", type: "file", size: "4 MB" },
        { name: "album.zip", type: "file", size: "40 MB" },
        {
          name: "Albums",
          type: "folder",
          children: [
            { name: "RockAlbum", type: "file", size: "50 MB" },
            {
              name: "JazzCollection",
              type: "folder",
              children: [
                { name: "jazz1.mp3", type: "file", size: "5 MB" },
                { name: "jazz2.mp3", type: "file", size: "6 MB" },
                {
                  name: "JazzDeep",
                  type: "folder",
                  children: [
                    { name: "jazz_extra.mp3", type: "file", size: "4.5 MB" },
                    { name: "jazz_special.mp3", type: "file", size: "5.2 MB" }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Notes.txt",
      type: "file",
      size: "15 KB"
    },
    {
      name: "Videos",
      type: "folder",
      children: [
        { name: "movie.mp4", type: "file", size: "700 MB" },
        {
          name: "Clips",
          type: "folder",
          children: [
            { name: "clip1.mp4", type: "file", size: "100 MB" },
            { name: "clip2.mp4", type: "file", size: "120 MB" },
            {
              name: "Shorts",
              type: "folder",
              children: [
                { name: "short1.mp4", type: "file", size: "30 MB" },
                { name: "short2.mp4", type: "file", size: "40 MB" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "CodeProjects",
      type: "folder",
      children: [
        {
          name: "Websites",
          type: "folder",
          children: [
            { name: "app.html", type: "file", size: "50 KB" },
            { name: "util.html", type: "file", size: "30 KB" }
          ]
        },
        {
          name: "Python",
          type: "folder",
          children: [
            { name: "script.py", type: "file", size: "60 KB" },
            { name: "data_processor.py", type: "file", size: "80 KB" },
            {
              name: "Modules",
              type: "folder",
              children: [
                { name: "math_utils.py", type: "file", size: "40 KB" },
                { name: "string_utils.py", type: "file", size: "35 KB" },
                {
                  name: "AdvancedModules",
                  type: "folder",
                  children: [
                    { name: "ai_model.py", type: "file", size: "100 KB" },
                    { name: "data_analysis.py", type: "file", size: "120 KB" }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};


export default fileData;