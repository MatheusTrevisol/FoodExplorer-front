import { Select, Container } from './styles';

import { useAuth } from "../../hooks/auth";

import { IoEllipse } from 'react-icons/io5'
import { BsChevronDown } from "react-icons/bs";
import { useEffect } from 'react';

export function OrdersSelectOptions({targetId}) {
  const { user } = useAuth();

  return (
    <Select $permissionId={user.permission_id} className="select">
      <div id="category-select">
        <input type="checkbox" id="options-view-button" />

        <div id="select-button">
          <IoEllipse size={8} className="red" />
          <div id="selected-value" >Pendente</div>
        </div>

        {
          user.permission_id === 1 &&
          <div id="chevrons">
            <BsChevronDown />
          </div>
        }        
      </div>
      
      {
        user.permission_id === 1 &&
        <Container id="options" >
          <li className="option">
            <input
              id={1}
              type="radio"
              name="category"
            />
            <IoEllipse size={8} className="red" />
            <span className="label">Pendente</span>
          </li>

          <li className="option">
            <input
              id={2}
              type="radio"
              name="category"
            />
            <IoEllipse size={8} className="yellow" />
            <span className="label">Preparando</span>
          </li>

          <li className="option">
            <input 
              id={3}
              type="radio"
              name="category"
            />
            <IoEllipse size={8} className="green" />
            <span className="label">Entregue</span>
          </li>
        </Container>
      }
     
    </Select>   
  )
};