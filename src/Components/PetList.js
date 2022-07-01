import React from 'react';
import Pet from './Pet';
import './PetList.css';
import { useEffect, useState } from 'react';

//const BASE_URL = 'http://localhost:5000/api';

function PetList() {
  return (
    <section className="pet-list">
      <h4>All Pets</h4>
      <article>
        <Pet />
      </article>
    </section>
  );
}

export default PetList;
