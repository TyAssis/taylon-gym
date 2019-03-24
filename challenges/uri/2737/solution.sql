WITH average AS (
    SELECT 'Average'::text as name, ROUND(AVG(customers_number)) as customers_number, 3 as i
        FROM lawyers
    ), 
minimo AS (
    SELECT name, customers_number, 2 as i
        FROM lawyers
        WHERE customers_number = (SELECT min(customers_number) FROM lawyers)
    ), 
maximo AS (
    SELECT name, customers_number, 1 as i
        FROM lawyers
        WHERE customers_number = (SELECT max(customers_number) FROM lawyers)
    ),
tudo AS (
    SELECT * FROM maximo UNION ALL
    SELECT * FROM minimo UNION ALL
    SELECT * FROM average
    )

SELECT name, customers_number 
    FROM tudo
    ORDER BY i

