const express = require("express");
const Websocket=require("ws");
const http=require("http");
const cors=require("cors");
const path=require("path");


const app=express();
const server=http.CreateServer("http");
const ws=new Websocket.Server({"server"});

let buses=[
    {

    id:bus1,
    route:"Aksharchowk To ITMBU",
    time:"9:00am",
    status:"On-Time",
    name:"Amit Shah",
    number:"+91 9876543210",
    lat:22.3072,
    lan:73.1812,
},
{

    id:bus2,
    route:"Fatehgunj To ITMBU",
    time:"9:00am",
    status:On-Time,
    name:"Narendra Modi",
    number:"+91 9876543210",
    lat:22.3247,
    lan:73.1891,
},
{

    id:bus3,
    route:"Makarpura To ITMBU",
    time:"9:00am",
    status:Delayed,
    name:"Mukko",
    number:"+91 9876543210",
    lat:22.2495,
    lan: 73.1847,
},
{

    id:bus4,
    route:"Kamlanagar To ITMBU",
    time:"9:00am",
    status:Delayed,
    name:"Vijay Rupani",
    number:"+91 9876543210",
    lat:22.3247,
    lan:73.1891,
},
{

    id:bus5,
    route:"Karelibaug To ITMBU",
    time:"9:00am",
    status:"Delayed",
    name:"Pappu",
    number:"+91 9876543210",
    lat:22.3277,
    lan:73.2074,
    
},
{

    id:bus6,
    route:"Halol To ITMBU",
    time:"9:30am",
    status:"Delayed",
    name:"Yash",
    number:"+91 7817817654",
    lat:22.5046,
    lan:73.4714,
    
}
];
const PORT = 5000;

// ✅ API route for bus schedule
app.get("/api/bus-schedule", (req, res) => {
    res.json({ success: true, schedule: buses });
});

// ✅ Handle WebSocket connections for live bus tracking
wss.on("connection", (ws) => {
    console.log("Client connected");

    // Send initial bus locations
    ws.send(JSON.stringify({ type: "bus_locations", buses }));

    // Function to update bus locations
    const updateBusLocations = () => {
        buses = buses.map(bus => ({
            ...bus,
            lat: bus.lat + (Math.random() * 0.02 - 0.001), // Simulated small movement
            lng: bus.lng + (Math.random() * 0.02 - 0.001),
        }));

        ws.send(JSON.stringify({ type: "bus_locations", buses }));
    };

    // Update locations in every 10 seconds
    const updateInterval = setInterval(updateBusLocations, 10000);

    ws.on("close", () => {
        console.log("Client disconnected");
        clearInterval(updateInterval); // Stop updates on disconnect
    });
});

// ✅ Start the server
server.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
