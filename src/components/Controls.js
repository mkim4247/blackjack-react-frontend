import React from 'react'

import { connect } from 'react-redux'
import { dealingCards, hittingPlayerCards, playerStay, doublingPlayer, splittingPlayerCards } from '../redux/actions'


class Controls extends React.Component {

  dealCards = event => {
    this.props.dealingCards()
  }

  hitPlayer = event => {
    this.props.hittingPlayerCards()
  }

  doublePlayer = event => {
    this.props.doublingPlayer()
  }

  playerStay = event => {
    this.props.playerStay()
  }

  splitPlayer = event => {
    this.props.splittingPlayerCards()
  }

  render(){
    return(
      <div>
      Controls

       <button onClick={this.dealCards}>Deal</button>
      {this.props.playerHand.length > 0 ?
        <div>
          <button onClick={this.hitPlayer}>Hit</button>
          <button onClick={this.doublePlayer}>Double</button>
          <button onClick={this.playerStay}>Stay</button>


          <button onClick={this.splitPlayer}> Split </button>

        </div> : null }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    playerHand: state.playerHand,
    playerAction: state.playerAction,
    roundResult: state.roundResult
  }
}

export default connect(mapStateToProps, {dealingCards, hittingPlayerCards, playerStay, doublingPlayer, splittingPlayerCards })(Controls)