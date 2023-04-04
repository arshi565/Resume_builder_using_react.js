import React, { Component } from 'react';

class ResumeBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      address: '',
      phone: '',
      education: [{ institute: '', year: '', degree: '' }],
      experience: [{ company: '', year: '', designation: '' }],
      skills: [],
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleEducationChange = (index, event) => {
    const { name, value } = event.target;
    const { education } = this.state;
    education[index][name] = value;
    this.setState({ education });
  };

  handleExperienceChange = (index, event) => {
    const { name, value } = event.target;
    const { experience } = this.state;
    experience[index][name] = value;
    this.setState({ experience });
  };

  handleSkillChange = (event) => {
    this.setState({ skills: event.target.value });
  };

  handleAddEducation = () => {
    const { education } = this.state;
    education.push({ institute: '', year: '', degree: '' });
    this.setState({ education });
  };

  handleAddExperience = () => {
    const { experience } = this.state;
    experience.push({ company: '', year: '', designation: '' });
    this.setState({ experience });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  render() {
    const { name, email, address, phone, education, experience, skills } = this.state;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={name} onChange={this.handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={email} onChange={this.handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" className="form-control" id="address" name="address" value={address} onChange={this.handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" className="form-control" id="phone" name="phone" value={phone} onChange={this.handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="education">Education</label>
            {education.map((edu, index) => (
              <div key={index}>
                <input type="text" className="form-control" name="institute" value={edu.institute} onChange={(e) => this.handleEducationChange(index, e)} placeholder="Institute Name" required />
                <input type="text" className="form-control" name="year" value={edu.year} onChange={(e) => this.handleEducationChange(index, e)} placeholder="Year" required />
                <input type="text" className="
