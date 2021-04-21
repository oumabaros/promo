import React, { Component } from 'react';

export class TopBarMenu extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="TopBarMenu">
          <div className="Bg">
            <div className="Balance">
              <div className="BalanceText">Balance</div>
              <div className="BalanceAmount">159 465 $</div>
            </div>
            <div className="WillBePaid">
              <div className="Payout">Payout</div>
              <div className="PayoutAmount">159 465 $</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
