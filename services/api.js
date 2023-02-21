import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://qruzbejyayagwvjlldth.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFydXpiZWp5YXlhZ3d2amxsZHRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY5OTM0NTIsImV4cCI6MTk5MjU2OTQ1Mn0.2yFMPVutdlll9EJ6uwLYUYd1Valnw5IXyM_cO3K9IVk",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFydXpiZWp5YXlhZ3d2amxsZHRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY5OTM0NTIsImV4cCI6MTk5MjU2OTQ1Mn0.2yFMPVutdlll9EJ6uwLYUYd1Valnw5IXyM_cO3K9IVk"
    }
})