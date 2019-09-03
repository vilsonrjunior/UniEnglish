import React from 'react'
import StickyFooter from 'react-sticky-footer';

class Footer extends React.Component{
  render() {
    return(
      <StickyFooter
          bottomThreshold={50}
          normalStyles={{
          backgroundColor: "#1d809f",
          padding: "2rem"
          }}
      >
      </StickyFooter>
    )
  }
}

export default Footer
