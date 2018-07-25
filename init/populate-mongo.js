curl -d '{"isPercent":false, "amount": 5, "activate": true}' -H "Content-Type: application/json" -X POST http://localhost:3000/coupon/create

curl -X GET "http://localhost:3000/coupon/edit/5b4de5092fa29d5515f2aa1f"

curl -X GET "http://localhost:3000/coupon/all"