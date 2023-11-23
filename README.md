# Here's what I learned 

- I wanted to build something using the new Next 13 hybrid components architecture. I had some idea that it would benefit the solution. It turned out to be mostly a distraction. 
- I spent a while designing a lamp in svg. While it didn't take long, I could have waited with that until near the end, and adjust to my time budget. 
- I wanted to get a cool experience for the status lamp ui and didn't think too much about the requirements. 
- I skipped a lot of the server using json and useState
- When I began building something more serious for the data layer I tried generating it with random data. It didn't work well with the server rendered components. 
- I took a third stab at making a better architecture for the frontend by moving to a pages (next 12) structure and mocking the data inline. I began with writing what each page should do and read the specs again. I realized that I had imagined a part that were not needed: Datestamp. I also reconsidered how an order and a status are connected. 
- My next step would be to design a simple rest api backend for orders and equipment statuses. I have a clearer view on how they would interact with each other. 
- I considered the question of polling vs web socket. I think the socket would make most sense om the supervisor dashboard. The equipment lights are write only. 
- For the data layer it could be something like Redux. More than one thing needs to happen for some operations and sometimes there is a state machine underlying, like how the colors transition and the yellow color's name depends on the previous color. 
