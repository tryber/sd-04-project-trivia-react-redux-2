import React from 'react';
import { connect } from 'react-redux';

const Profile = ({ profile }) => {
  return (
    <div>
      <img
        src={`https://www.gravatar.com/avatar/${profile.gravatarEmail}`}
        data-testid="header-profile-picture"
      />
      <span data-testid="header-player-name"> Jogador: {profile.name} </span>
      <span data-testid="header-score">Pontos: {profile.score}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.playerReducer,
});

export default connect(mapStateToProps)(Profile);
