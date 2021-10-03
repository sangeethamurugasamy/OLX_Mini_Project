import { ReportGmailerrorred } from "@mui/icons-material";

const CustomerAPI={
    customers : [
        {email:"divagaran@gmail.com",name:"Divagaran",itemsPurchased:2,totalAmount:30000},
        {email:"naveen@gmail.com",name:"Naveen",itemsPurchased:2,totalAmount:60000},
        {email:"monica@gmail.com",name:"Monica",itemsPurchased:2,totalAmount:20000},
        {email:"sangeetha@gmail.com",name:"Sangeetha",itemsPurchased:2,totalAmount:50000},
        {email:"rana@gmail.com",name:"Rana",itemsPurchased:2,totalAmount:40000},
    ],
    all:function() {
        return this.customers;
    },
    get:function(username){
        const isCustomer = cust=>cust.name===username
        return this.customers.find(isCustomer)
    }
}

export default CustomerAPI;