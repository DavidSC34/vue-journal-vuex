export default ()=>({
     isLoading:true,
     entries:[
          {
               id: new Date().getTime(),//12341234
               date: new Date().toDateString(),//sat 23,julio
               text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere mi at leo tempus, sed volutpat magna hendrerit. Sed commodo imperdiet imperdiet. Aenean at posuere arcu, sed sodales diam. Sed in ullamcorper mauris. Nulla ac leo ut urna posuere porta vitae convallis est. Nullam eleifend odio eget eleifend venenatis. Maecenas eleifend tempor lacus, sed convallis nisi congue eu.',
               picture:null
          },
          {
               id: new Date().getTime() + 1000,//12341234
               date: new Date().toDateString(),//sat 23,julio
               text: 'Duis posuere mi at leo tempus, sed volutpat magna hendrerit. Sed commodo imperdiet imperdiet. Aenean at posuere arcu, sed sodales diam. Sed in ullamcorper mauris. Nulla ac leo ut urna posuere porta vitae convallis est. Nullam eleifend odio eget eleifend venenatis. Maecenas eleifend tempor lacus, sed convallis nisi congue eu.',
               picture:null
          },
          {
               id: new Date().getTime() + 2000,//12341234
               date: new Date().toDateString(),//sat 23,julio
               text: 'Duis posuere mi at leo tempus, sed volutpat magna hendrerit. Sed commodo imperdiet imperdiet. Aenean at posuere arcu, sed sodales diam. Sed in ullamcorper mauris. Nulla ac leo ut urna posuere porta vitae convallis est. Nullam eleifend odio eget eleifend venenatis. Maecenas eleifend tempor lacus, sed convallis nisi congue eu.',
               picture:null
          },
     ]
})