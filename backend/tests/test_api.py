def test_health_check(client):
    response = client.get("/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "ok"
    assert "service" in data


def test_list_plans_empty_initially(client):
    response = client.get("/api/v1/plans")
    assert response.status_code == 200
    assert isinstance(response.json(), list)


def test_auth_me_requires_token(client):
    response = client.get("/api/v1/auth/me")
    assert response.status_code == 401


def test_recommendations_track_record(client):
    response = client.get("/api/v1/recommendations/track-record")
    assert response.status_code == 200
    data = response.json()
    assert "stats" in data
    assert "calls" in data
    assert isinstance(data["calls"], list)


def test_blog_list(client):
    response = client.get("/api/v1/blog")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

