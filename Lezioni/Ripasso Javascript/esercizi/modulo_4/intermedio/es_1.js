// Gestore di Richieste API: Crea una classe che gestisce le richieste a un'API, implementando metodi get, post, put e delete,
//  con gestione degli errori e possibilità di impostare headers predefiniti.

// Soluzione
class APIClient {
  constructor(baseURL, defaultHeaders = {}) {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      "Content-Type": "application/json",
      ...defaultHeaders,
    };
  }

  async get(endpoint, customHeaders = {}) {
    return this._request(endpoint, "GET", null, customHeaders);
  }

  async post(endpoint, data, customHeaders = {}) {
    return this._request(endpoint, "POST", data, customHeaders);
  }

  async put(endpoint, data, customHeaders = {}) {
    return this._request(endpoint, "PUT", data, customHeaders);
  }

  async delete(endpoint, customHeaders = {}) {
    return this._request(endpoint, "DELETE", null, customHeaders);
  }

  async _request(endpoint, method, data = null, customHeaders = {}) {
    const url = `${this.baseURL}${endpoint}`;

    const options = {
      method,
      headers: {...this.defaultHeaders, ...customHeaders},
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(
          `Errore HTTP: ${response.status} - ${response.statusText}`
        );
      }

      // Verifichiamo se la risposta è vuota
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return await response.json();
      } else {
        return await response.text();
      }
    } catch (error) {
      console.error(`Errore nella richiesta ${method} a ${url}:`, error);
      throw error;
    }
  }
}

// Test
const api = new APIClient("https://jsonplaceholder.typicode.com");

async function testAPI() {
  try {
    // GET request
    const posts = await api.get("/posts");
    console.log("Posts:", posts.slice(0, 2));

    // POST request
    const newPost = await api.post("/posts", {
      title: "Nuovo Post",
      body: "Contenuto del post",
      userId: 1,
    });
    console.log("Nuovo post creato:", newPost);

    // PUT request
    const updatedPost = await api.put("/posts/1", {
      id: 1,
      title: "Post aggiornato",
      body: "Contenuto aggiornato",
      userId: 1,
    });
    console.log("Post aggiornato:", updatedPost);

    // DELETE request
    const deleteResult = await api.delete("/posts/1");
    console.log("Risultato delete:", deleteResult);
  } catch (error) {
    console.error("Test API fallito:", error);
  }
}

testAPI();
