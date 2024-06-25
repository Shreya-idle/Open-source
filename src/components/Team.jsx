import React from 'react';

const teamMembers = [
  { name: 'XYZ', position: 'President', imgSrc: 'path/to/president.jpg' },
  { name: 'XYZ', position: 'Vice President', imgSrc: 'path/to/vicepresident.jpg' },
  { name: 'XYZ', position: 'General Secretary', imgSrc: 'path/to/generalsecretary.jpg' },
  { name: 'XYZ', position: 'Web Development Lead', imgSrc: 'path/to/webdevlead.jpg' },
  { name: 'XYZ', position: 'Web Development Co-Lead', imgSrc: 'path/to/webdevcolead.jpg' },
  { name: 'XYZ', position: 'Tech Lead', imgSrc: 'path/to/techlead.jpg' },
  { name: 'XYZ', position: 'Event Lead', imgSrc: 'path/to/eventlead.jpg' },
  { name: 'XYZ', position: 'Social Media and Outreach Lead', imgSrc: 'path/to/socialmedia.jpg' },
  { name: 'XYZ', position: 'Content Lead', imgSrc: 'path/to/contentlead.jpg' },
  { name: 'XYZ', position: 'Operational Manager', imgSrc: 'path/to/operationalmanager.jpg' }
];

const Team = () => {
  return (
    <section id="team" className="team">
      <h3>Our Team</h3>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.imgSrc} alt={member.name} className="profile-pic" />
            <div className="member-info">
              <h4>{member.name}</h4>
              <p>{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
