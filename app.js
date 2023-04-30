// Sample data for emperors
const emperorsData = [
    {
      name: "Babur",
      image: "https://i.pinimg.com/564x/05/bc/91/05bc91535248113f44b1592d4075efe9.jpg",
      birthYear: 1483,
      reign: "1526-1530",
      notableWorks: [
        "The Baburnama"
      ]
    },
    {
      name: "Humayun",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Emperor_Humayun.JPG/708px-Emperor_Humayun.JPG?20200806000737",
      birthYear: 1508,
      reign: "1530-1540, 1555-1556",
      notableWorks: [
        " Humayun-nama"
      ]
    },
    {
      name: "Akbar",
      image: "https://sundayguardianlive.com/wp-content/uploads/2019/08/razi.jpg",
      birthYear: 1542,
      reign: "1556-1605",
      notableWorks: [
        "Akbarnama",
        "Ain-i-Akbari"
      ]
    },
    {
      name: "Jahangir",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Jahangircrop.jpeg/800px-Jahangircrop.jpeg",
      birthYear: 1569,
      reign: "1605-1627",
      notableWorks: [
        "Tuzuk-i-Jahangiri",
        "Jahangirnama"
      ]
    },
    {
      name: "Shah Jahan",
      image: "https://www.tajmahal.gov.in/images/shah-jahan.jpg",
      birthYear: 1592,
      reign: "1627-1658",
      notableWorks: [
        "Diwan-i-Am",
        "Peacock Throne"
      ]
    },
    {
      name: "Aurangzeb",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Aurangzeb-portrait.jpg",
      birthYear: 1618,
      reign: "1658-1707",
      notableWorks: [
        "Alamgirnama",
        "Aurangzeb Nama"
      ]
    }
  ];
  
  const emperorsList = document.querySelector('#emperors ul');
  
  emperorsData.forEach((emperor) => {
    const emperorItem = document.createElement('li');
    const emperorLink = document.createElement('a');
    const emperorImage = document.createElement('img');
    const emperorDetails = document.createElement('div');
    const emperorName = document.createElement('h3');
    const emperorBirthYear = document.createElement('p');
    const emperorReign = document.createElement('p');
    const emperorWorks = document.createElement('p');
  
    emperorLink.setAttribute('href', `#${emperor.name.toLowerCase().replace(' ', '-')}`);
    emperorName.textContent = emperor.name;
    emperorImage.setAttribute('src', emperor.image);
    emperorImage.setAttribute('alt', `${emperor.name} portrait`);
    emperorBirthYear.textContent = `Born: ${emperor.birthYear}`;
    emperorReign.textContent = `Reign: ${emperor.reign}`;
    emperorWorks.textContent = `Notable works: ${emperor.notableWorks.join(', ')}`;
  
    emperorItem.appendChild(emperorLink);
    emperorLink.appendChild(emperorImage);
    emperorLink.appendChild(emperorDetails);
    emperorDetails.appendChild(emperorName);
    emperorDetails.appendChild(emperorBirthYear);
    emperorDetails.appendChild(emperorReign);
    emperorDetails.appendChild(emperorWorks);
  
    emperorsList.appendChild(emperorItem);
  });
  