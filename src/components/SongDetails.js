import React from 'react';
import { connect } from 'react-redux';


function SongDetails({ song }) {
    console.log(song)
    return (
        <div>
            {song ? <div className="ui card">
                <div className="content">
                    <h3 className="header">{song.title}</h3>
                    <h6 className="description">
                        {song.duration}
                    </h6>
                </div>
            </div> : <h5>please select</h5>}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    };
}

export default connect(mapStateToProps)(SongDetails);