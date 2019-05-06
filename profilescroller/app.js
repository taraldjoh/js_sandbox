const data = [
    {
        name: 'Tarald Johansen',
        age: '21',
        gender: 'male',
        lookingfor: 'female',
        location: 'Møre og Romsdal, NO',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Katarina Gieron',
        age: '17',
        gender: 'female',
        lookingfor: 'male',
        location: 'Møre og Romsdal, NO',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'Kent Clark',
        age: '20',
        gender: 'male',
        lookingfor: 'female',
        location: 'Møre og Romsdal, NO',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    }
];

const profiles = profileIterator(data);

// Next Event
document.getElementById('next').addEventListener("click", nextProfile);


// Next Profile Display
function nextProfile() {
    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>
    `;
    
        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}"></img>`;
    } else {
        // No more profiles
        window.location.reload();
    }

    
}



// Profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profiles.length ? 
            { value: profiles[nextIndex++], done: false } : 
            { done: true }
        }
    };
}