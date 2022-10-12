import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import data from './data';
import EventItem from './components/EventItem';
import HomePage from './pages/HomePage';

function App() {
  console.log(data.events);
  return (
    <Router>


  
    
      
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/event/:id' element={<EventItem />} />
          {/* <Route path='/event/:id' element={<EventItem />} /> */}
          </Routes>
    

  

   
  </Router>
  );
}

export default App;


{/* <Layout>
<div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
  {data.events.map((event) => (
    <>
      <EventItem event={event} key={event._id}>
        {event.name}
      </EventItem>
      {/* <EventMap  event={event} key={event.slug}/> */}
  //   </>
  // ))}

// </div>
// // </Layout> */}