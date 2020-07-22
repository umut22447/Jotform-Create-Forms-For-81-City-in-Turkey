var request = require('request');

var iller = ['','Adana', 'Adıyaman', 'Afyon', 'Ağrı', 'Amasya', 'Ankara', 'Antalya', 'Artvin',
'Aydın', 'Balıkesir', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale',
'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir',
'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Isparta', 'Mersin', 'İstanbul', 'İzmir', 
'Kars', 'Kastamonu', 'Kayseri', 'Kırklareli', 'Kırşehir', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya', 
'Manisa', 'Kahramanmaraş', 'Mardin', 'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Rize', 'Sakarya',
'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Şanlıurfa', 'Uşak',
'Van', 'Yozgat', 'Zonguldak', 'Aksaray', 'Bayburt', 'Karaman', 'Kırıkkale', 'Batman', 'Şırnak',
'Bartın', 'Ardahan', 'Iğdır', 'Yalova', 'Karabük', 'Kilis', 'Osmaniye', 'Düzce'];

for(var i = 1; i < iller.length ; i++){
    var options = {

        method: 'POST',
      
        url: 'https://api.jotform.com/form?apikey=YOUR_API_KEY',
      
        headers: {
      
          'Content-Type': 'application/json'
          
        },
        formData: {
    
            'questions[0][type]': 'control_head',
    
            'questions[0][text]': "Contact form for " + iller[i],
    
            'questions[0][order]': '1',
    
            'questions[0][name]': 'header',
    
            'questions[1][type]': 'control_fullname',
    
            'questions[1][text]': 'Please enter your fullname',
    
            'questions[1][order]': '2',
    
            'questions[1][name]': 'fullname',

            'questions[2][type]': 'control_email',
    
            'questions[2][text]': 'Please enter your email',
    
            'questions[2][order]': '3',
    
            'questions[2][name]': 'email',

            'questions[3][type]': 'control_phone',
    
            'questions[3][text]': 'Please enter your phone',
    
            'questions[3][order]': '4',
    
            'questions[3][name]': 'phone',

            'questions[4][type]': 'control_textarea',
    
            'questions[4][text]': 'Please enter your note',
    
            'questions[4][order]': '5',
    
            'questions[4][name]': 'note',

            'questions[5][type]': 'control_button',
    
            'questions[5][text]': 'Send',
    
            'questions[5][order]': '6',
    
            'questions[5][name]': 'send_button',

    
            'properties[title]':  "Contact form for " + iller[i]
        }
    };
    
    request(options, function(error,response,body){
        if (error) throw new Error(error);
    
    
        console.log(response.body);
     });
}

