// Simple test to verify Carousel component handles different data types correctly
import React from 'react';
import Carousel from '../src/features/common/components/Carousel';

// Test scenarios
const testCases = [
  {
    name: 'Valid array',
    items: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }],
    renderItem: (item) => <div>{item.name}</div>
  },
  {
    name: 'Empty array',
    items: [],
    renderItem: (item) => <div>{item.name}</div>
  },
  {
    name: 'Null items',
    items: null,
    renderItem: (item) => <div>{item.name}</div>
  },
  {
    name: 'Undefined items',
    items: undefined,
    renderItem: (item) => <div>{item.name}</div>
  },
  {
    name: 'Non-array items (string)',
    items: 'not an array',
    renderItem: (item) => <div>{item}</div>
  },
  {
    name: 'Non-array items (object)',
    items: { items: [{ id: 1, name: 'Item 1' }] },
    renderItem: (item) => <div>{item.name}</div>
  }
];

function CarouselTest() {
  return (
    <div>
      <h1>Carousel Component Tests</h1>
      {testCases.map((testCase, index) => (
        <div key={index} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>{testCase.name}</h3>
          <Carousel 
            items={testCase.items} 
            renderItem={testCase.renderItem} 
          />
        </div>
      ))}
    </div>
  );
}

export default CarouselTest;
