import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Section } from './components/section/section';
import { Card } from './components/card/card';


const sec1 = {
  sectionName: 'Recharges & pay bills',
  items: [
    {
      name: 'prepaid',
      src: '',
      alt: '',
      info: 'May 24, 06:12 PM I Simpl Pay Later'
    },
    {
      name: 'prepaid',
      src: '',
      alt: '',
      info: 'May 24, 06:10 PM'
    },
    {
      name: 'prepaid',
      src: '',
      alt: '',
      additionalInfo: '₹100 Cashback! Will be credited after repayment'
    },
    {
      name: 'prepaid',
      src: '',
      alt: '',
      info: 'May 24, 06:10 PM'
    },
    {
      name: 'prepaid',
      src: '',
      alt: '',
      info: 'May 24, 06:10 PM'
    },
    {
      name: 'prepaid',
      src: '',
      alt: '',
      additionalInfo: '₹100 Cashback! Will be credited after repayment'
    },
    {
      name: 'prepaid',
      src: '',
      alt: '',
      info: 'May 24, 06:10 PM'
    },
    {
      name: 'prepaid',
      src: '',
      alt: '',
      info: 'May 24, 06:10 PM'
    }
  ]
}

const sec2 = {
  sectionName: 'You can also use Simpl on',
  items: [
    {
      name: 'prepaid',
      src: '',
      alt: '',
      info: 'May 24, 06:12 PM I Simpl Pay Later'
    },
    {
      name: 'prepaid',
      src: '',
      alt: '',
      info: 'May 24, 06:10 PM'
    },
    {
      name: 'prepaid',
      src: '',
      alt: '',
      additionalInfo: '₹100 Cashback! Will be credited after repayment'
    },
    {
      name: 'prepaid',
      src: '',
      alt: '',
      info: 'May 24, 06:10 PM'
    },
    {
      name: 'prepaid',
      src: '',
      alt: '',
      info: 'May 24, 06:10 PM'
    },
    {
      name: 'prepaid',
      src: '',
      alt: '',
      additionalInfo: '₹100 Cashback! Will be credited after repayment'
    },
    {
      name: 'prepaid',
      src: '',
      alt: '',
      info: 'May 24, 06:10 PM'
    },
    {
      name: 'prepaid',
      src: '',
      alt: '',
      info: 'May 24, 06:10 PM'
    }
  ]
}

const sec3 = {
  sectionName: 'Recent transactions',
  items: [
    {
      name: 'prepaid',
      src: '',
      alt: '',
      info: 'May 24, 06:12 PM I Simpl Pay Later',
      amt: '150'
    },
    {
      name: 'prepaid',
      src: '',
      alt: '',
      info: 'May 24, 06:10 PM',
      amt: '300'
    },
    {
      name: 'prepaid',
      src: '',
      alt: '',
      info: 'May 24, 06:10 PM',
      additionalInfo: '₹100 Cashback! Will be credited after repayment',
      amt: '400'
    },
    {
      name: 'prepaid',
      src: '',
      alt: '',
      info: 'May 24, 06:10 PM',
      amt: '230'
    },
    {
      name: 'prepaid',
      src: '',
      alt: '',
      info: 'May 24, 06:10 PM',
      amt: '324'
    }
  ]
}

const cardsJson = [
  {
    logo: '',
    isBillDue: true,
    spentTillNow: 1800,
    dueDate: '15 Aug',
    isPayable: true,
    amtToPay: 1500,
    info: ''
  },
  {
    logo: '',
    isBillDue: false,
    spentTillNow: 1150,
    dueDate: null,
    isPayable: false,
    amtToPay: null,
    info: 'Clear last month’s dues with ICICI bank on/before 15th to avoid late payment fees. Manage account'
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{
        height: '13rem',
        background: '#00D1C1'
      }}>
        <div className='welcome-msg'>
          <h3>Welcome to Simpl</h3>
        </div>
        <div className='active-accounts-text'>2 active accounts</div>
      </header>

      <div className='floating-cards-container'>
        <div className='cards-container'>
          {cardsJson.map((cardProps, idx) => <Card key={idx} {...cardProps} />)}
        </div>
      </div>

      <div className='sections-container'>
        <Section {...sec2} direction={'horizontal'} wrap={true} />
        <Section {...sec1} direction={'horizontal'} itemsWithBackground={true} />
        <Section {...sec3} direction={'vertical'} />
      </div>

      
      <div className={'footer'}>
        <div>
          <div className='fa fa-font'></div>
          <div>Home</div>
        </div>
        <div>
          <div className='fa fa-font'></div>
          <div>Passbook</div>
        </div>
        <div>
          <div className='fa fa-font'></div>
          <div>Billbox</div>
        </div>
        <div>
          <div className='fa fa-font'></div>
          <div>Profile</div>
        </div>
        <div>
          <div className='fa fa-font'></div>
          <div>Mopre</div>
        </div>
      </div>
    </div>

  );
}

export default App;
