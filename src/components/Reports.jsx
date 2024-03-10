import React, { useState, useEffect } from 'react';
import './reports.css';
import CardFilter from './CardFilter';
import ReportCharts from './ReportCharts';

function Reports() {
const [items, setItems] = useState([]);
const [filter, setFilter] = useState('Today');
const handleFilterChange = filter => {
setFilter(filter);
};

const fetchData = () => {
fetch('http://localhost:4000/topselling')
. then(res => res. json() )
. then (data => {
setItems (data);
})

.catch(e => console. log(e.message) ) ;
};

useEffect(() => {
fetchData();
}, []);

    return (
        <div className="card recent-sales overflow-auto">
        <CardFilter filterChange={handleFilterChange} />
        
        <div className="card-body">
        <h5 className="card-title">
        Device Service Details <span>| {filter}</span>
        </h5>
        <ReportCharts items={items} />
        </div>
        </div>
    );
}
export default Reports;