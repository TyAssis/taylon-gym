SELECT cdd.name, ROUND ((
	(scr.math*2) + 
    (scr.specific*3) + 
    (scr.project_plan*5)
) / 10, 2) as avg
FROM candidate cdd
JOIN score scr ON scr.candidate_id = cdd.id
ORDER BY avg DESC
