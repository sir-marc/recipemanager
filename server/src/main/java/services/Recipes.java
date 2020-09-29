package services;

import java.util.List;
import java.util.Properties;
import java.util.Set;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.FetchOptions;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;

@Path("/recipes")
public class Recipes {

	@GET
	@Path("/")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Entity> getAll() {
	    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
	    Query query = new Query("recipes");
		PreparedQuery pq = datastore.prepare(query);
		List<Entity> results = pq.asList(FetchOptions.Builder.withDefaults());
		return results;
	}
	

	@POST
	@Path("/")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Entity post(Properties recipe) {
	    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
	    Entity entity=new Entity("recipes");
	    
	    Set<String> keys = recipe.stringPropertyNames();
	    for (String key : keys) {
		    entity.setProperty(key, recipe.getProperty(key));
	    }
	    datastore.put(entity);
		return entity;
	}
}