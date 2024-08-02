 const token = localStorage.getItem('authToken');
        if (token) {
          try {
            const decoded = jwtDecode(token);
            setToken(decoded);
            setusername(decoded.name);
          } catch (error) {
            console.error('Failed to decode token', error);
          }
        }