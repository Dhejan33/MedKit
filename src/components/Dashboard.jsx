import React, { useState, useEffect } from 'react';
import './dashboard.css';
import Card from './Card';
import Reports from './Reports';
import RecentSales from './RecentSales';
import RecentActivity from './RecentActivity';
import Budgetreport from './Budgetreport';


function Dashboard() {
const [cards, setCards] = useState([]);

const fetchData = () => {
fetch('http://localhost:4000/cards' )
// eslint-disable-next-line
.then(res => res. json())
.then (data => {
    setCards (data);
})
.catch(e => console. log(e.message));
// eslint-disable-next-line 
};
useEffect (() => {
fetchData();
}, []);
return (
<section className="dashboard section">
<div className="row">
<div className="col-lg-8">
<div className="row">
{
    cards && cards.length>0 &&
    cards.map(card=><Card key={card._id} card={card} /> )
}
<div className="col-12">
    <Reports />
</div>
<div className="col-12">
    <RecentSales />
</div>
</div>
</div>
<div className="col-lg-4">
    <RecentActivity/>
    <Budgetreport />
</div>
</div>
</section>
);
}

export default Dashboard;