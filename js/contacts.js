const app = new Vue({
    el: '#app',
    data: {
        currentIndex: 0,
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novit???',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Dio B.',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],
        newMessage:'',
        searchQuery: null,
    },
    methods:{
        changeChat(index){
            this.currentIndex = index;
            console.log(index)

        },
        lastMessage(contact){
            const mess = contact.messages[contact.messages.length - 1];
            console.log(contact.messages[contact.messages.length - 1]);
            return mess.message;
        },
        lastMessageHour(contact){
            const DateTime = luxon.DateTime;
            const mess = contact.messages[contact.messages.length - 1];
            console.log(DateTime.fromFormat(mess.date, "dd/MM/yyyy HH:mm:ss").toFormat("HH:mm"));
            return DateTime.fromFormat(mess.date, "dd/MM/yyyy HH:mm:ss").toFormat("HH:mm");
        },
        sendMessage(){
            const DateTime = luxon.DateTime;
            const neWmessage = {
                    date: DateTime.now().toFormat("dd/MM/yyyy HH:mm:ss"),
                    message: this.newMessage,
                    status: 'sent'
            };
            this.contacts[this.currentIndex].messages.push(neWmessage);
            this.newMessage = '';  
            // alert("bestemmia");
            this.autoreply();
        },
        autoreply(){
            pippo = this;
            setTimeout(function() {
                const DateTime = luxon.DateTime;
                const neWmessage = {
                    date: DateTime.now().toFormat("dd/MM/yyyy HH:mm:ss"),
                    message: 'guarda che hai sbagliato persona',
                    status: 'received'                                
                };            
                 pippo.contacts[pippo.currentIndex].messages.push(neWmessage);                       
            }, 1000);
            
        }

    },
    // computed:{
    //     search(){
    //         if(this.search){
    //         this.contacts.filter((item)=>{
    //          this.searchQuery.toLowerCase().split(' ').every(v => item.contact.toLowerCase().includes(v))
    //         })
    //         }else{
    //             this.contacts;
    //         }    
            
    //     }
    // }
})

