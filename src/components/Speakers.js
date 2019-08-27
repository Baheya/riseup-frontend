import React from 'react';
import axios from 'axios';

import Speaker from './Speaker';

import './Speakers.scss';
import Modal from './Modal';

const POST_FORM = {
  name: {
    value: ''
  },
  email: {
    value: ''
  },
  image: {
    value: ''
  },
  position: {
    value: ''
  },
  company: {
    value: ''
  },
  biography: {
    value: ''
  }
};

class Speakers extends React.Component {
  state = {
    speakers: [],
    postForm: POST_FORM,
    show: false
  };

  componentDidMount() {
    this.getSpeakers();
  }

  getSpeakers = () => {
    axios.get('http://localhost:8080/speakers').then(res => {
      console.log(res);
      this.setState({
        speakers: res.data.speakers
      });
    });
  };

  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  inputChangeHandler = (input, value, files) => {
    console.log(input, value, files);
    this.setState(prevState => {
      const updatedForm = {
        ...prevState.postForm,
        [input]: {
          ...prevState.postForm[input],
          value: files ? files[0] : value
        }
      };
      return {
        postForm: updatedForm
      };
    });
  };

  createNewSpeaker = speakerData => {
    const formData = new FormData();
    formData.append('name', speakerData.name);
    formData.append('email', speakerData.email);
    formData.append('image', speakerData.image);
    formData.append('position', speakerData.position);
    formData.append('company', speakerData.company);
    formData.append('biography', speakerData.biography);
    let url = 'http://localhost:8080/create-speaker';
    let method = 'POST';
    //   if (this.state.editPost) {
    //     url = "URL";
    //   }

    fetch(url, {
      method: method,
      body: formData
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Creating or editing a post failed!');
        }
        return res.json();
      })
      .then(res => {
        console.log(res);
        this.setState(prevState => {
          let updatedSpeakers = [...prevState.speakers, res.speaker];
          return {
            speakers: updatedSpeakers
          };
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  registerSpeaker = e => {
    // e.preventDefault();
    const speaker = {
      name: this.state.postForm.name.value,
      email: this.state.postForm.email.value,
      image: this.state.postForm.image.value,
      position: this.state.postForm.position.value,
      company: this.state.postForm.company.value,
      biography: this.state.postForm.biography.value
    };
    console.log(speaker);
    this.createNewSpeaker(speaker);
    this.showModal();
  };

  render() {
    return (
      <div className="speakers-page-container">
        {this.state.show ? <div className="back-drop" /> : null}
        <Modal
          className="modal"
          onClose={this.showModal}
          show={this.state.show}
          inputChangeHandler={this.inputChangeHandler}
          postForm={this.state.postForm}
          registerSpeaker={this.registerSpeaker}
        />
        <div>
          <h3 className="page-title">RiseUp '19 Speakers</h3>
          <button onClick={this.showModal}>Sign Up as a Speaker</button>
          <div className="speakers-container">
            {this.state.speakers.map(speaker => {
              const {
                name,
                company,
                biography,
                position,
                _id,
                imageUrl
              } = speaker;
              return (
                <Speaker
                  key={_id}
                  name={name}
                  company={company}
                  position={position}
                  biography={biography}
                  image={imageUrl}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Speakers;
