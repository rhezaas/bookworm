package bookworm.applications;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.enterprise.context.ApplicationScoped;
import java.util.HashMap;
import java.util.Map;


@Path("/")
@ApplicationScoped
public class Controller {
	@GET
    public Map<String, String> welcome() {
		Map<String, String> welcome = new HashMap<>();
		welcome.put("message", "welcome");
		
		return welcome;
	}
}
