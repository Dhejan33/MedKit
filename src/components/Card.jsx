import React,{useState} from 'react';
import './card.css';
import CardFilter from './CardFilter';
import * as Icons from 'react-bootstrap-icons';

function Card({card}) {
    const [filter,setFilter] = useState('Today');
    const handleFilterChange = filter => {
        setFilter(filter);
    };
    const IconComponent = Icons[card.icon];

  return (
    <div className="col-xxl-4 col-md-6">
        <div className="card info-card sales-card">     
            <CardFilter filterChange={handleFilterChange} />
            <div className="card-body">
                <h5 className="card-title">
                    {card.name} <span>| {filter}</span>
                </h5>

                <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <div className="d-flex align-items-center">
                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                {IconComponent && <IconComponent size={30} color={card.color}/>}
                            </div>
                        </div>
                    </div>
                    <div className="ps-3">
                        <h6>{card.name === 'Revenue' ? '$' + card. amount. toLocaleString ('en-US'): card.amount. toLocaleString('en-US')}</h6>
                        <span className="small pt-1 fw-bold" style={{color:`${card.color}`}}>{card.percentage}</span>
                        <span className="text-muted small pt-2 ps-1">{card.active}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Card;