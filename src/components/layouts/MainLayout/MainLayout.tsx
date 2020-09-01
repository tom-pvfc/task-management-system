import * as React from 'react';
import MainHeader from '../../ui/MainHeader/MainHeader';
import Banner from '../../ui/Banner/Banner';

const MainLayout = (props) => 
{
    let title = props.title;

    return (
        <div className={`main-layout ${props.className} `}>
          <div className="main-layout__wrapper">
              <div className="main-layout__wrapper--header">
                    <MainHeader
                        title={title}
                    />
              </div>
                    <div className="main-layout__wrapper--banner">
                      <Banner />
                    </div>
                    <div className="main-layout__wrapper--maps">
                       {
                           props.children
                       }
                    </div>
                </div>
        </div>
    )
}
export default MainLayout;
