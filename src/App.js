import { SideBar } from './SideBar';
import { Footer } from './Footer';
import { TopBarMenu } from './TopBarMenu';
import Copy from './assets/Copy.svg';
import { promoData } from './data/placeholderData';
import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

//Main calss app
class App extends Component {
  constructor() {
    super();
    //Initialize variables
    this.state = {
      search: null,
      value: '',
      copied: false,
      activate: 'Activate Bonus',
      //initialize proms[] with mock data from file
      proms: promoData.promos,
    };
  }
  //function to initialize 'search' variable with search text.
  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  render() {
    //function to reset screen after search. sets 'search' to null
    const handleSubmit = (e) => {
      e.preventDefault();
      document.getElementById('txtSearch').value = '';
      this.setState({ search: null });
    };
    //function to activate bonus by setting to true or false by toggling 'Status'
    const activateBonus = (e) => {
      const updatedProms = [...this.state.proms];
      //if 'status=true then set status=false and vice versa
      updatedProms.map((item) =>
        item.id.toString() === e.target.id
          ? Object.assign(item, { status: !item.status })
          : item,
      );
      //set value of promos[] to the the result of search
      this.setState({ proms: updatedProms });
      //log values of promos[] on the console output to reflect changes
      console.log([...this.state.proms]);
    };
    //display 'No Promos' if promos[] is empty
    if (this.state.proms == null || this.state.proms.length === 0) {
      return <h5>No Promos</h5>;
    }
    //function to filter and populate elements with data
    const items = this.state.proms
      .filter((data) => {
        if (this.state.search == null) return data;
        else if (
          data.description
            .toLowerCase()
            .includes(this.state.search.toLowerCase()) ||
          data.promocode.toLowerCase().includes(this.state.search.toLowerCase())
        ) {
          return data;
        }
      })
      .map((p) => {
        return (
          <div key={p.id}>
            <div className="Card">
              <div className="Promo">{p.description}</div>

              <div className="Description">Description</div>
              <div className="PromoCode">Promocode</div>
              <div className="Pro">
                <div className="CardBody">
                  <div>
                    <input
                      type="text"
                      id={p.promocode + p.id}
                      value={p.promocode}
                      className="ItPromoCode"
                      onChange={({ target: { value } }) =>
                        this.setState({ value, copied: false })
                      }
                    />

                    <CopyToClipboard
                      text={p.promocode}
                      onCopy={() => this.setState({ copied: true })}
                    >
                      <div className="CopyPasteIcon">
                        <button>
                          <img src={Copy} alt="Copy" />
                        </button>
                      </div>
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
              {!p.status && (
                <div className="StandardBlue">
                  <div className="BonusBody">
                    <div className="ActiveBonus">
                      <button id={p.id} onClick={activateBonus}>
                        Activate Bonus
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {p.status && (
                <div className="StandardBlue">
                  <div className="BonusRed">
                    <div className="ActiveBonus">
                      <button id={p.id} onClick={activateBonus}>
                        Deactivate Bonus
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      });
    //render data
    return (
      <div className="outer">
        <SideBar />
        <TopBarMenu />
        <div className="Services">
          Services
          <div className="Filter">
            <div className="FilterText">Filter</div>
          </div>
          <input
            className="Glow"
            id="txtSearch"
            type="text"
            ref={(input) => {
              this.textInput = input;
            }}
            placeholder="Se...|"
            onChange={(e) => this.searchSpace(e)}
          />
          <div className="Reset">
            <div className="ResetBody">
              <div className="ResetContent">
                <button type="button" onClick={handleSubmit}>
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
        {items}

        <Footer />
      </div>
    );
  }
}

export default App;
