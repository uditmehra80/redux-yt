import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

function SongList(props) {

    console.log(props);

    return (
        props.songs.map((song) => {
            return (
                <div key={song.title} className="ui cards">
                    <div className="card">
                        <div className="content">
                            <div className="header">{song.title}</div>
                            <div className='right floated content'>
                                <button
                                    onClick={() => props.selectSong(song)}
                                    className='ui button primary'
                                >
                                    Select
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    );
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs
    };
}

export default connect(mapStateToProps, { selectSong })(SongList);