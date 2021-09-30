import React, { useState } from 'react'
import ChatBot from 'react-simple-chatbot'
import styled, { ThemeProvider } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styling/iconStyle.css';
// import img1 from './images/bike_image1.jpg';

// import './App.css'
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#0f4d4a',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#0f4d4a',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}

// all available config props
const config = {
  width: '300px',
  height: '400px',
  hideUserAvatar: true,
  placeholder: 'Type your response.',
  headerTitle: 'ChatBot',
  
}

const Chatbot = (props) => {
  let [showChat, setShowChat] = useState(false)

  const startChat = () => {
    setShowChat(true)
  }
  const hideChat = () => {
    setShowChat(false)
  }

  return (
    <div className="chatbot">
    <ThemeProvider theme={theme}>
      <div style={{ display: showChat ? 'none' : '' }}>
        <ChatBot
          speechSynthesis={{ enable: true, lang: 'en-US' }}
          recognitionEnable={true}
          steps={[
            {
                id:'1', 
                message:'Hello People, I am here to help you!!', 
                trigger:'2',
               },
               {
                id:'2', 
                user:true, 
                trigger:'3',
               },
               {
               id:'3',
               message:'{previousValue}, What is your name?',
               trigger:'4',
               },
               {
                id:'4',
                user:true,
                validator: (value) => {
                    if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value))
                      {
                        return true;
                      }
                    else
                      {
                        return'Please input alphabet characters only.';
                      }
                 },
                trigger:'5',
               },
               {
                id:'5',
                message:'Nice name {previousValue}!!!, How can I help you?',
                trigger:'6',
               },
              {
                id:'6',
                options: [
                  { value: 1, label: 'How to buy products?', trigger: '7' },
                  { value: 2, label: 'How to Register?', trigger: '8' },
                  { value: 4, label: 'Will the product deliver to home If I make an order?', trigger: '10'},
                  { value: 5, label: 'All of these items are serviced already?', trigger: '11'},
                  { value: 6, label: 'How many days does it take to deliver to the exact location?', trigger: '12'},
                  { value: 7, label: 'Can all sellers be trusted?', trigger: '13'},
                  { value: 8, label: 'How can I trust the sellers?', trigger: '14'},
                  { value: 3, label: 'I dont want any help', trigger: '9'},

                ],
              },
              {
                id:'7',
                message:'You can buy products using ADD TO CART option.',
                trigger: '6',
              },
              {
                id : '8',
                message: 'You can register with the email id and password using register button which is present in the top right corner.',
                trigger: '6',
              },
              {
                id: '9',
                message: 'Okay fine. Thank You!!!',
                end: true,
              },
              {
                id:'10',
                message:'Definitely the orders will come to your exact location.',
                trigger: '6',
              },
              {
                id:'11',
                message:'Yes, All of these products are serviced already.',
                trigger: '6',
              },
              {
                id:'12',
                message:'It will take 5 to 6 days to deliver \n It may vary according to your location.',
                trigger: '6',
              },
              {
                id:'13',
                message:'Yes all the sellers are trusted. We only include the items after checking.',
                trigger: '6',
              },
              {
                id:'14',
                message:'You can trust the sellers because we have already verified them.',
                trigger: '6',
              },
              
            ]}
          {...config}
        />
      </div>
      <div>
        {!showChat ? (
          <div>
          {/* <div className="open_close"> Close Chatbot</div> */}
          <button className="Button" onClick={() => startChat()}>
          </button>
          </div>
          
        ) : (
          <div>
          {/* <div className="open_close"> Open Chatbot </div> */}
          <button className="Button" onClick={() => hideChat()}>
          </button>
          </div>
        )}
        
      </div>
    </ThemeProvider>
    </div>
  )
}

export default Chatbot
