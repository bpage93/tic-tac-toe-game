import React, { Component } from 'react'
import './Board.css'
import BlankPiece from './BlankPiece.js'
import XPiece from './XPiece.js'
import OPiece from './OPiece.js'

class Board extends Component {
    render() {
        return (
            <section>
                <div>
                    <div className="row Row1">
                        <div><OPiece /></div>
                        <div><BlankPiece /></div>
                        <div><XPiece /></div>
                    </div>
                    <div className="row Row2">
                        <div><BlankPiece /></div>
                        <div><OPiece /></div>
                        <div><BlankPiece /></div>
                    </div>
                    <div className="row Row3">
                        <div><XPiece /></div>
                        <div><BlankPiece /></div>
                        <div><XPiece /></div>
                    </div>
                </div>
            </section>

        )
    }
}
export default Board 