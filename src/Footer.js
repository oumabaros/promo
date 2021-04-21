import { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="FooterDashboard">
          <div className="SolidDivider">
            <div className="Solid"></div>
          </div>
          <div className="LanguageMenu">
            <div className="SectionStatic">
              <div className="Pyc"></div>
            </div>
          </div>
        </div>
        <div className="FooterText">&copy; IT Promocodes, 2019 </div>
      </div>
    );
  }
}
